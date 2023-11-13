// Trova elemento html con la classe "container"


const imgCarosello = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }

];
const container = document.getElementById("container")

imgCarosello.forEach(item => {

    const imagesHTML = `
    <img class="image" src="${item.image}" alt="${item.title}">
    <p class="title">${item.title}</p>
    <p class="text">${item.text}</p>
    `

container.innerHTML += imagesHTML;


})

//Impostazione imagine attiva
let attualeImg = 0;
const images = document.querySelectorAll("#container img");
images[attualeImg].classList.add("active");


//impostazione title attivo
let attualeParagrafo = 0; 
const title = document.querySelectorAll("#container .title");
title[attualeParagrafo].classList.add("active");

//impostazione text attivo
let attualeText = 0; 
const text = document.querySelectorAll("#container .text");
text[attualeText].classList.add("active");



/////////////UP//////////////

const arrowUp = document.querySelector(".fa-arrow-up");
arrowUp.addEventListener("click", function (){
    console.log ("Avanti")

    //IMG///
    if(attualeImg < images.length -1){
        images[attualeImg].classList.remove("active");
        attualeImg++;
        images[attualeImg].classList.add("active");
    } 
    else {
        images[attualeImg].classList.remove("active");
        attualeImg= 0;
        images[attualeImg].classList.add("active");

    }

      //TITLE///
    if(attualeParagrafo < title.length -1){
        title[attualeParagrafo].classList.remove("active");
        attualeParagrafo++;
        title[attualeParagrafo].classList.add("active");
    } 
    else {
        title[attualeParagrafo].classList.remove("active");
        attualeParagrafo= 0;
        title[attualeParagrafo].classList.add("active");

    }
      //TEXT///

      if(attualeText < title.length -1){
        text[attualeText].classList.remove("active");
        attualeText++;
        text[attualeText].classList.add("active");
    } 
    else {
        text[attualeText].classList.remove("active");
        attualeText= 0;
        text[attualeText].classList.add("active");

    }



});

/////////////DOWN//////////////

const arrowDown = document.querySelector(".fa-arrow-down");
arrowDown.addEventListener("click", function (){
    console.log ("Indietro");

     //IMG///
    if(attualeImg > 0){
        images[attualeImg].classList.remove("active");
        attualeImg--;
        images[attualeImg].classList.add("active");
    }
    else{
        images[attualeImg].classList.remove("active");
        attualeImg= 4;
        images[attualeImg].classList.add("active");
    }

    //TITLE///
    if(attualeParagrafo > 0){
        title[attualeParagrafo].classList.remove("active");
        attualeParagrafo--;
        title[attualeParagrafo].classList.add("active");
    }
    else{
        title[attualeParagrafo].classList.remove("active");
        attualeParagrafo= 4;
        title[attualeParagrafo].classList.add("active");
    }
 

     //TEXT///

     if(attualeText > 0){
        text[attualeText].classList.remove("active");
        attualeText--;
        text[attualeText].classList.add("active");
    }
    else{
        text[attualeText].classList.remove("active");
        attualeText= 4;
        text[attualeText].classList.add("active");
    }
 

})





