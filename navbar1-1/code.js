const menuBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('burger_open');
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation =`navLinkFade .4s forwards ${index / 7 + .9}s ease`;
        }
    });
});
