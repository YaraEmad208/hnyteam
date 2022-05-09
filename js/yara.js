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

var buyList = document.getElementsByClassName('buy');
for(let i=0 ; i<buyList.length;i++)
{
  buyList[i].addEventListener('click' ,function()
  {
    alert('this item was add to your cart successfully ..');
  }
  )
}


    
   