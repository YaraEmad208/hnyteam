const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=> {
      nav.classList.add('active')   
    })
    
}
 if(close){
     close.addEventListener('click',()=>{
         nav.classList.remove('active');
     }
     )
 }       

 let img = document.querySelector('img');
 let  btn1 = document.querySelector('#btn1');
 let btn2 = document.querySelector('#btn2');
 let btn3 = document.querySelector('#btn3');

 btn1.addEventListener('click' , () => {

    img.src = './media/css/secreat.jpg';
 })


 btn2.addEventListener('click' , () => {

    img.src='./media/css/عندما-يعزف-الشيطان-18757(1).jpg';
 })

 btn3.addEventListener('click' ,() => {
    
    img.src='./media/css/yousef.jpeg';
 })