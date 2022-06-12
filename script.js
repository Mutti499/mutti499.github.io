
const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const logo2 = document.querySelector('#logo2')
const hamburger = document.querySelector('#hamburger')
const headline = document.querySelector('.headline')
const headline2 = document.querySelector('.headline2')
const headline3 = document.querySelector('.headline3')
const content = document.querySelector('.content')
const sociallist = document.querySelector('.sociallist')
const tl = new TimelineMax();

function myFunction(x) {
    if (x.matches) { // smaller than 700
        
        tl.fromTo(hero,1,{height:'0%'},{height:'80%',ease: Power2.easeInOut})
        .fromTo(hero,1.2,{width:'100%'},{width:'80%',ease: Power2.easeInOut})
        .fromTo(slider,1.2,{x:'-100%'},{x:'0%',ease: Power2.easeInOut},'-=1.2')
        .fromTo(logo,0.5,{opacity:0, x:30},{opacity:1, x:0},'-=0.5')
        .fromTo(logo2,0.5,{opacity:0, x:30},{opacity:1, x:0})
        .fromTo(hamburger,0.5,{opacity:0, x:-30},{opacity:1, x:0},'-=0.5')
        .fromTo(headline,0.5,{opacity:0, y:100},{opacity:1, y:-200, x:10},'-=0.5')
	    .fromTo(headline2,1,{opacity:0, y:100},{opacity:1, y:-100, x:10},'-=0.5')
        .fromTo(headline3,1,{opacity:0, y:100},{opacity:1, y:-70, x:10},'-=0.5')
        .fromTo(sociallist,1,{opacity:0},{opacity:1})
        .fromTo(content,1,{opacity:0},{opacity:1})
        } 
    else { //bigger than 700
        tl.fromTo(hero,1,{height:'0%'},{height:'80%',ease: Power2.easeInOut})
        .fromTo(hero,1.2,{width:'100%'},{width:'80%',ease: Power2.easeInOut})
        .fromTo(slider,1.2,{x:'-100%'},{x:'0%',ease: Power2.easeInOut},'-=1.2')
        .fromTo(logo,0.5,{opacity:0, x:30},{opacity:1, x:0},'-=0.5')
        .fromTo(logo2,0.5,{opacity:0, x:30},{opacity:1, x:0})
        .fromTo(hamburger,0.5,{opacity:0, x:-30},{opacity:1, x:0},'-=0.5')
        .fromTo(headline,0.5,{opacity:0, y:100},{opacity:1, y:-150},'-=0.5')
        .fromTo(headline2,1,{opacity:0, y:100},{opacity:1, y:-50, x:-25})
        .fromTo(headline3,1,{opacity:0, y:100},{opacity:1, y:-20, x:-25},'-=0.5')
        .fromTo(sociallist,1,{opacity:0},{opacity:1})
        .fromTo(content,1,{opacity:0},{opacity:1})
    }
  }
  
var x = window.matchMedia("(max-width: 750px)")
myFunction(x) // Call listener function at run time


//Get the button:
mybutton = document.querySelector(".myBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.classList.add("animate")
    
  } else {
    mybutton.classList.remove("animate")
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.85": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    /*
     Daha buyudugunde 4 slayt olmasini istersen ac
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    */
  },
});


var swiper2 = new Swiper(".mySwiper2", {

  cssMode: true,

  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
    clickable: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
 
});

/*
function myFunction(a) {
  if (a.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
   document.body.style.backgroundColor = "pink";
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

var a = window.matchMedia("(max-width: 700px)")
myFunction(a) // Call listener function at run time
a.addListener(myFunction) // Attach listener function on state changes
*/