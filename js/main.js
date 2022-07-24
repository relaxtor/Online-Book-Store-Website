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

window.addEventListener('load', function() {
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

// Login form open-close
const loginForm = document.querySelector('[data-login-form]');
const loginFormOpen = document.querySelector('[data-login-btn]');
const loginFormClose = document.querySelector('[data-login-form-closemark]');

loginFormOpen.addEventListener('click', function() {
    loginForm.classList.add('active');
    searchForm.classList.remove('active');
    searchButton.classList.remove('fa-xmark');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
});

loginFormClose.addEventListener('click', function() {
    loginForm.classList.remove('active');
    document.body.style.position = '';
    document.body.style.top = '';
});

// Loader image
const loaderPage = document.querySelector('[data-loader]');

fadeOut();

function loader() {
    loaderPage.classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 3000);
}