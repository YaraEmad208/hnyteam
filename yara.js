const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

 
var modal = document.getElementById('id03');
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }


    
   