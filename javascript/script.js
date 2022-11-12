'use strict';

const header = document.querySelector('.header-section')
const overlay = document.querySelector('.overlay');

// Navigation
const mobileNavToggle = document.querySelector('.header__mobile-nav-toggle');
mobileNavToggle.addEventListener('click', () => {
    header.classList.toggle('navigation-open');
})

// Removing overlay
const hideMobileNavigation = () => {
    overlay.classList.add('hidden');
    header.classList.remove('navigation-open');
}

// When the user click on escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideMobileNavigation();
    }
})

// When the width is greater than 768 pixels
window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        hideMobileNavigation()
    }
});





