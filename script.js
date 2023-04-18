let ham = document.getElementById("ham")
let slide1 = document.getElementById("slide-pg1")
ham.addEventListener("click",(e)=>{
    slide1.classList.toggle("translate-x-[-100%]")
})

slide1.addEventListener("click",(e)=>{
    if (slide1 !== e.target){
        slide1.classList.toggle("translate-x-[-100%]")
    }
})

// Initialization for ES Users
var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 4000); // Change image every 2 seconds
} 


var slidePosition1 = 1;
SlideShow1(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow1(slidePosition1 += n);
}

//  images controls
function currentSlide(n) {
  SlideShow1(slidePosition1 = n);
}

function SlideShow1(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition1 = 1}
    if (n < 1) {slidePosition1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition1-1].style.display = "block";
    circles[slidePosition1-1].className += " enable";
  } 