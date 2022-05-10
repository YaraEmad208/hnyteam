
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    
    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }
    // ال نيف بار
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    } var slide_index = 1;
    displaySlides(slide_index);
    
    function nextSlide(n) {
        displaySlides(slide_index += n);
    }
    
    function currentSlide(n) {
        displaySlides(slide_index = n);
    }
    // السلايدر
    function displaySlides(n) {
        var i;
        var slides = document.getElementsByClassName("showSlide");
        if (n > slides.length) { slide_index = 1 }
        if (n < 1) { slide_index = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slide_index - 1].style.display = "block";
    }
    