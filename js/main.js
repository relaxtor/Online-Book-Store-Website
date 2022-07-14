"use strict";
// Fixed header-bottom
const headerFix = document.querySelector('[data-header-bottom]');

window.addEventListener('scroll', function() {
    if(window.scrollY > 80) {
        headerFix.classList.add('active');
    } else {
        headerFix.classList.remove('active');
    }

    searchForm.classList.remove('active');
});

// Transition search-form
const searchForm = document.querySelector('[data-search-form]');
const searchButton = document.querySelector('[data-search-btn]');

searchButton.addEventListener('click', function() {
    this.classList.toggle('fa-xmark');
    searchForm.classList.toggle('active');
});