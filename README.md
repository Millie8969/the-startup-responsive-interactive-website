Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
270 Degrees

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

270 Degrees is een website waarmee je kunt ontdekken hoe de 3D-webviewer jou en jouw bedrijf kan helpen bij het tentoonstellen van jouw 3D-modellen. Het vertelt je wat 270 Degrees is, laat een voorbeeld zien van de viewer, en geeft de mogelijk om contact op te nemen met 270 Degrees. De site bevat voornamelijk blauwe kleuren en is responsive voor alle devices.

Link naar de site: [270 Degrees](https://millie8969.github.io/the-startup-responsive-interactive-website/index.html)

<img width="100%" height="auto" alt="image" src="https://github.com/user-attachments/assets/f9eea959-9516-4c29-861b-5e2bfd11c25b" />


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
De belangrijkste kenmerken zijn het gebruik van semantisch correcte elementen, het integreren van een hamburger menu met een animatie volgens het Disney animatie-principe "Squash and Stretch" en het gebruik van de meegegeven huisstijl vanuit Assist Digital.

Het hamburger-menu heb ik gemaakt door een nav-element te vullen met links (die nu nog niks doen). Het hele menu komt vanuit rechts in beeld met een korte animatie die gebruikt maakt van het Squash and Stretch-principe. Dit is gedaan met behulp van de cubic-bezier()-functie in CSS.
```
<nav class="nav-mobile">
    <a href="" class="nav-mobile-link">Assets</a>
    <a href="" class="nav-mobile-link">Solutions</a>
    <a href="" class="nav-mobile-link">Cases</a>
    <a href="" class="nav-mobile-link">About 270</a>
    <a href="" class="nav-mobile-link">Contact</a>
</nav>
```

In JS ziet het er zo uit:

```
// Stap 1: Selecteer de nodige elementen voor de interactie.
const navButton = document.querySelector('.nav-button');
const navContainer = document.querySelector('.nav-mobile');
const navButtonText = document.querySelector('.nav-button-text')
const buttonImageHamburger = document.querySelector('#hamburger');
const buttonImageHamburgerClose = document.querySelector('#hamburger-close');


// Stap 2: Voeg een event listener toe aan het element dat een event zal ondergaan.
navButton.addEventListener('click', function() {

// Stap 3: Toggle de juiste classes op de juiste elementen.
    navContainer.classList.toggle('open');
    buttonImageHamburger.classList.toggle('hidden');
    buttonImageHamburgerClose.classList.toggle('hidden');
    navButtonText.classList.toggle('hidden');
});
```
Ten slotte heb ik met het oog op responsiveness gebruik gemaakt van de functie 'clamp()' om op die manier altijd de juiste lettergrootte weer te geven, ongeacht welk apparaat je gebruikt om de website te bekijken.

De meegegeven huisstijl heb ik iets anders verwerkt dan in het design wordt weergegeven, omdat het ontwerp anders niet zo toegankelijk is. Ook heb ik de achtergrondkleur van de website moeten aanpassen. Wél heb ik ervoor gezorgd dat alle kleuren binnen de huisstijl vallen, zodat er in ieder niet wordt afgeweken van het kleurenpalet.

## Bronnen

[cubic-bezier @ MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/easing-function/cubic-bezier)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


