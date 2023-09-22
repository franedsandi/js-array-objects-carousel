/* 
1. with a cicle, print the pictures inside items-wrapper y
2. pick the elements with the class "item" and safe each in array y
3. take out the hide class on the first element y
4. when next ( arrow down ) y
    a. add the class hide to the current element y
    b. increase the counter y
    c. remove the class hide to the current new elemnet  y
5. when prev (4. upside down ) y
6. hide prev button in item 1 (in bonus conect to the last) y
7. hide next element at the last class (in bonus conect to the first) y 
**extra bonus**
8. add the thumbnails at the left of the image in css using active as previus homeworks
9.make each picture active when the picture is in use*/

/* elements */
const itemsWrapper = document.querySelector('.items-wrapper');
const smallPicsContainer = document.querySelector('.smallpics');
/* buttons */
const btnBottom = document.querySelector('.bottom');
const btnTop = document.querySelector('.top');
/* reset */
let counterImg = 0;
let counterSmall= 0;
let smallPics = '';
itemsWrapper.innerHTML = '';
/* images */
const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];
images.forEach((item) => {
  console.log(item)
  itemsWrapper.innerHTML += `<img src="./${item.image}" alt="${item.title}" class="hide">`;;
  smallPicsContainer.innerHTML +=`<div class="smallpic"><img src="./${item.image}" alt="${item.title}"></div>`;}
);

