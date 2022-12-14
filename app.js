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
  const WORD_STAY_DELAY = 1200;

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


const Progetti = document.getElementById("Contenitore_Progetti");

for(const link of Contenitore_Progetti.getElementsByTagName("a")) {
  link.onmousemove = e =>{
    const rect = link.getBoundingClientRect(),
    img = link.querySelector("img");
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px` ;
   
  }
}

window.onmousemove = e =>{
  const percent = e.clientY / window.innerHeight/3,
        y= percent *Progetti.offsetHeight*-.5;

  Progetti.animate({
    transform:`translateY(${y}px)`
  },{
    fill: "forwards",
    duration: 4000
  })
}


var text1 = document.getElementById("primo")
var movie1 = document.getElementById("video")
text1.addEventListener("mouseover", ()=>{
  movie1.play();
})

text1.addEventListener("mouseleave", ()=>{
  movie1.pause();
})




function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
