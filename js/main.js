"use strict";
// Fixed header-bottom
const headerFix = document.querySelector('[data-header-bottom]');

window.addEventListener('scroll', function() {
    if(window.scrollY > 80) {
        headerFix.classList.add('active');
    } else {
        headerFix.classList.remove('active');
    }
});