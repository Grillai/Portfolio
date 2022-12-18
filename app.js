const hamburger = document.querySelector(".Hamburger");
const NavMenu = document.querySelector(".Collegamenti");

hamburger.addEventListener("click",() =>{
  hamburger.classList.toggle("active");
  NavMenu.classList.toggle("active");

})



$(window).ready(function(){

    let mouseX = 0;
    let mouseY = 0;
    let xp = 0;
    let yp = 0;
  
    $(document).mousemove(function(e){
      $(".inner_cursor").css({
        transform: 'translate(' + (e.clientX - 3.25) + 'px, ' + (e.clientY - 135) + 'px)'
      });

      mouseX = e.clientX - 10;
      mouseY = e.clientY - 10;
    });
  
    setInterval(function(){
      xp += ((mouseX - xp)/2);
      yp += ((mouseY - yp)/2);
      $(".outer_cursor").css({transform: 'translateX('+ (xp -12) +'px) translateY('+ (yp - 143) +'px)'} );
    }, 10);
})



$(window).on("load",function(){
  setTimeout(function() {
    $('.Vegeta_loader').fadeOut('');
  }, 3300);
});


const text = document.querySelector('#Mansione');

// make a words array
const words = [
  "Frontend Developer.",
  "Web Designer.",
  "Freelancer. ",
  "Gamer."
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 40;
  const WORD_STAY_DELAY = 3000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}

const Social = document.querySelector(".Social");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 180) {
    Social.classList.add("active");
  } else {
    Social.classList.remove("active");
  }
});




function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let counter = 0;


let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1); 
}
/* Decrease the index by 1 - show the previous slide: */
function previousSlide() {
  showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
  showSlides(slideIndex = n);
  
  
}

function showSlides(n) {
  
  /* We refer to the elements with the class name "item", that is, to the pictures: */
  let slides = document.getElementsByClassName("item");
  
  /* Checking the number of slides: */
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
      slideIndex = slides.length;

  }

  /* Loop through each slide in a for loop: */
  for (let slide of slides) {
      slide.style.display = "none";
  }
  /* Making an element block: */
  slides[slideIndex - 1].style.display = "block";    
 
}

    
const Avanti = document.querySelector(".Avanti");
const Indietro = document.querySelector(".Indietro");
const Cursore = document.querySelector(".outer_cursor");
const Cursore_Interno = document.querySelector(".inner_cursor");


Avanti.addEventListener("click",() =>{
  Avanti.classList.toggle("active");
})

Avanti.addEventListener('mouseover', (event) => {
  Cursore.classList.add("active");
  Cursore_Interno.classList.add("active");
});

Avanti.addEventListener('mouseleave', (event) => {
  Cursore.classList.remove("active");
  Cursore_Interno.classList.remove("active");
});


Indietro.addEventListener("click",() =>{
  Indietro.classList.toggle("active");
})

Indietro.addEventListener('mouseover', (event) => {
  Cursore.classList.add("active")
  Cursore_Interno.classList.add("active");
});

Indietro.addEventListener('mouseleave', (event) => {
  Cursore.classList.remove("active");
  Cursore_Interno.classList.remove("active");
});
