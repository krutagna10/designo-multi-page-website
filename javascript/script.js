'use strict';

const header = document.querySelector('.header-section')
const overlay = document.querySelector('.overlay');
const webProjects = document.querySelectorAll('.service--web');
const appProjects = document.querySelectorAll('.service--app');
const graphicProjects = document.querySelectorAll('.service--graphic');
const serviceSection = document.querySelectorAll('.service-section');

// Navigation
let openNavigationButton = document.querySelector('.header__nav-open-btn');
let closeNavigationButton = document.querySelector('.header__nav-close-btn');

openNavigationButton.addEventListener('click', () => {
    header.classList.add('navigation-open');
    overlay.classList.remove('hidden');
})

closeNavigationButton.addEventListener('click', () => {
    header.classList.remove('navigation-open');
    overlay.classList.add('hidden');
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



// When the user clicks on any project container
for (const webProject of webProjects) {
    webProject.addEventListener('click', () => {
        if (webProject.classList.contains('service--home')) {
            window.location.href = 'pages/web-design.html';
        } else {
            window.location.href = 'web-design.html';
        }
    });
}

for (const appProject of appProjects) {
    appProject.addEventListener('click', () => {
        if (appProject.classList.contains('service--home')) {
            window.location.href = 'pages/app-design.html';
        } else {
            window.location.href = 'app-design.html';
        }
    });
}

for (const graphicProject of graphicProjects) {
    graphicProject.addEventListener('click', () => {
        if (graphicProject.classList.contains('service--home')) {
            window.location.href = 'pages/graphic-design.html';
        } else {
            window.location.href = 'graphic-design.html';
        }
    });
}



