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

