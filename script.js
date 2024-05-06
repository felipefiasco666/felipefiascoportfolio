
/* hide toggle button after clicking active link*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/** below js script is for multityping text */

const text=document.querySelector(".sec-text");
const textLoad=() => {
    setTimeout(()=>{
        text.textContent="backend developer";
    },0);
    setTimeout(() => {
        text.textContent="frontend developer";
        
    },4000);
    setTimeout(() => {
        text.textContent="music producer";
        
    },8000);
    setTimeout(() => {
        text.textContent="video editor";
        
    },12000);
}
textLoad();
setInterval(textLoad,16000);

/* for scrolling and giving an active page link color */

let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };

    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toggle icon when click navbar link*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/**scroll reveal */
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.content,.heading,.hero-text h2',{origin:'top'});
ScrollReveal().reveal('.about-content,.hero-image2,.portfolio-box,.hero-image',{origin:'bottom'});

ScrollReveal().reveal('.about-content p,.home-sci',{origin:'left'});
ScrollReveal().reveal('.skills,',{origin:'right'});




