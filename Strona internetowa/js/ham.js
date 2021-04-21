const nav = document.querySelector("header ul");
const lines = document.querySelectorAll("line");
const burger = document.querySelector(".hamburger");
const body = document.querySelector("body");

const navSlide = () => {
    //const lines = document.querySelectorAll("line");
    //const burger = document.querySelector(".hamburger");
    //const nav = document.querySelector("header ul");
    //const body = document.querySelector("body");
    
    body.style.overflowX = `hidden`;

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        if(document.querySelector('.nav-active'))
        {
            body.style.overflowY = 'hidden';
        }
        else{
            body.style.overflowY = `scroll`;
            
        }
        burger.classList.toggle("hamburger-active");
       // burger.classList.toggle("hamburger-animation div");
        lines.classList.toggle("hamburger-animation");
    })
}
navSlide();

const navLink = document.querySelectorAll("header ul li");

navLink.forEach(li =>{
    
        li.addEventListener('click', ()=>{
            nav.classList.remove('nav-active');
            
            
            if(document.querySelector('.hamburger-active')){
                burger.classList.remove("hamburger-active");
                body.style.overflowY = 'scroll';
            }


        })
})