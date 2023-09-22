/* Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando gli oggetti.
Alla slide aggiungere un titolo e un testo
===
**Bonus 1:**
Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
****
===
**Bonus 2:**
E se volessi un bottone per invertire la “direzione” del carosello?
****
===
**Bonus 3:**
Al click della thumb cambia l’immagine attiva
****
=== 
step by step
1. create an array objets of each element
2. usin for-each configure what you want to add show in the html
3. position relative and absole for the text in css
4. configure the buttons to change not only the image and the active element, also the text
bonus
1. add a timer to change the image each 10 second
2. add a button 
3. the button will make the order of the timer upwards
4. make each thumb a button
5. when i click a thumb the image change */

// Elements
const itemsWrapper = document.querySelector('.items-wrapper');
const smallPicsContainer = document.querySelector('.smallpics');
const btnBottom = document.querySelector('.bottom');
const btnTop = document.querySelector('.top');
const invertOrderButton = document.querySelector('.invert-order');

// Variables
let counterImg = 0;
let invertOrder = false;
// 1.
// Images Data
const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morales',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// Functions

// Function to highlight the active thumbnail
function highlightActiveThumbnail() {
  const thumbnails = smallPicsContainer.querySelectorAll('.smallpic');
  thumbnails.forEach((thumbnail, index) => {
    if (index === counterImg) {
      thumbnail.classList.add('active');
    } else {
      thumbnail.classList.remove('active');
    }
  });
}

// Function to show the next image
function showNextImage() {
  const slides = itemsWrapper.querySelectorAll('.slide');
  slides[counterImg].classList.add('hide');
  counterImg = (counterImg + 1) % slides.length;
  slides[counterImg].classList.remove('hide');
  slides[counterImg].querySelector('.text').classList.remove('hide');
  highlightActiveThumbnail();
}

// Function to show the previous image
function showPreviousImage() {
  const slides = itemsWrapper.querySelectorAll('.slide');
  slides[counterImg].classList.add('hide');
  counterImg = (counterImg - 1 + slides.length) % slides.length;
  slides[counterImg].classList.remove('hide');
  slides[counterImg].querySelector('.text').classList.remove('hide');
  highlightActiveThumbnail();
}
// bonus 3.
// Function to toggle the order of image rotation
function toggleOrder() {
  invertOrder = !invertOrder;
}
// bonus 1.
// Function to automatically show the next image in a slideshow
function autoShowNextImage() {
  setInterval(() => {
    if (invertOrder) {
      showPreviousImage();
    } else {
      showNextImage();
    }
  }, 5000);
}
// bonus 4.
// Function to handle thumbnail click
function handleThumbnailClick(event) {
  if (event.target.tagName === 'IMG') {
    const index = parseInt(event.target.parentElement.getAttribute('data-index'));
    displayImage(index);
  }
}

// Function to display a specific image in the carousel
function displayImage(index) {
  const slides = itemsWrapper.querySelectorAll('.slide');
  slides[counterImg].classList.add('hide');
  counterImg = index;
  slides[counterImg].classList.remove('hide');
  slides[counterImg].querySelector('.text').classList.remove('hide');
  highlightActiveThumbnail();
}

// Initialization
// 2. 3.
// Populate the images and thumbnails
images.forEach((item, index) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  if (index !== 0) {
    slide.classList.add('hide');
  }
  slide.innerHTML = `
    <img src="./${item.image}" alt="${item.title}">
    <div class="text">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `;
  itemsWrapper.appendChild(slide);

  const smallpic = `
    <div class="smallpic ${index === 0 ? 'active' : ''}">
      <img src="./${item.image}" alt="${item.title}">
    </div>`;
  smallPicsContainer.insertAdjacentHTML('beforeend', smallpic);
});

// Event Listeners
btnBottom.addEventListener('click', showNextImage);
btnTop.addEventListener('click', showPreviousImage);
invertOrderButton.addEventListener('click', toggleOrder);

// Add click event listeners to all thumbnails
const thumbnails = smallPicsContainer.querySelectorAll('.smallpic');
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', handleThumbnailClick);
  thumbnail.setAttribute('data-index', index); // Store the index as a data attribute
});

// Start the auto slideshow
autoShowNextImage();
