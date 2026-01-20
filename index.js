// Stap 1: Selecteer de nodige elementen voor de interactie.
const navButton = document.querySelector('.nav-button');
const navContainer = document.querySelector('.nav-mobile');
const buttonImageHamburger = document.querySelector('#hamburger');
const buttonImageHamburgerClose = document.querySelector('#hamburger-close')

// Stap 2: Voeg een event listener toe aan het element dat een event zal ondergaan.
navButton.addEventListener('click', function() {

    // Stap 3: Toggle de juiste classes op de juiste elementen.
    navContainer.classList.toggle('open');
    buttonImageHamburger.classList.toggle('hidden');
    buttonImageHamburgerClose.classList.toggle('hidden');
});

console.log("Script loaded!")