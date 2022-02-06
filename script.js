const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const logo2 = document.querySelector('#logo2')
const hamburger = document.querySelector('#hamburger')
const headline = document.querySelector('.headline')
const headline2 = document.querySelector('.headline2')
const headline3 = document.querySelector('.headline3')
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
        .fromTo(headline3,1,{opacity:0, y:100},{opacity:1, y:-100, x:10},'-=0.5')
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
        .fromTo(headline3,1,{opacity:0, y:100},{opacity:1, y:-25, x:-25},'-=0.5')
    }
  }
  
var x = window.matchMedia("(max-width: 750px)")
myFunction(x) // Call listener function at run time