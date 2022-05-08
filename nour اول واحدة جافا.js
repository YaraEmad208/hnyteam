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

function by_visa(){
    alert("please enter \n your name\n your phone number\n your adress\n the date that you want to recieve the product");
    

}
function send(){
    alert("Your data has been sent successfully and we will contact you as soon as possible");
   

}