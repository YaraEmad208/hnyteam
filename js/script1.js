const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav= document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var index=0;
var totalSlides=slides.length;


nextSlide.onclick=function () {
    next("next");
}

prevSlide.onclick=function () {
    next("prev");
}

function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }

    else{

         if(index==0){
             index=totalSlides-1;
         }
         else{
             index--;
         }
    }
     for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");

     }
    slides[index].classList.add("active");
}