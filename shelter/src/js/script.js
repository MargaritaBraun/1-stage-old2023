import cards from "./cards";
const hamburger = document.querySelector('.burger__container');
const navMenu = document.querySelector('.nav-menu');

const body = document.body;

if (navMenu && hamburger ) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active')
        hamburger.classList.toggle('active')
        body.classList.toggle('lock')
    })

    navMenu.querySelectorAll('.item-menu').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

// плавная прокрутка по якорям

/*
  navMenu.addEventListener('click', e => {
        if (e.target.classList.contains('item-menu')) {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            body.classList.remove('lock')
        } else if (!e.target.classList.contains('item-menu')) {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            body.classList.remove('lock')
        }
    })



const anchors = document.querySelectorAll('a[href*="#"');

anchors.forEach(anchor => {
   anchor.addEventListener('click', event => {
    event.preventDefault(

      const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    )
   })
})



    navMenu.addEventListener('moseup', () => {
        if (navMenu.has(e.target).length === 0){
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            body.classList.remove('lock')
        }
    });

    
*/
