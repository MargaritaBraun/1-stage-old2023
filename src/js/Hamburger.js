const hamburger = document.querySelector('.burger__container');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;
const overlei = document.querySelector('.overlei');

if (navMenu && hamburger ) {
    hamburger.addEventListener('click', (e) => {
        navMenu.classList.toggle('active')
        hamburger.classList.toggle('active')
        overlei.classList.toggle('lock')
        body.classList.toggle('lock')
    })

    navMenu.querySelectorAll('.item-menu').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            overlei.classList.remove('lock')
            body.classList.toggle('lock')
        })
    })
}

  navMenu.addEventListener('click', e => {
        if (e.target.classList.contains('item-menu')) {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            overlei.classList.remove('lock')
            body.classList.remove('lock')
        } else if (!e.target.classList.contains('item-menu')) {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            overlei.classList.remove('lock')
            body.classList.remove('lock')
        }
    })



const anchors = document.querySelectorAll('item-menu');

anchors.forEach(anchor => {
   anchor.addEventListener('click', event => {
    event.preventDefault();
   })
})



    navMenu.addEventListener('moseup', () => {
        if (navMenu.has(e.target).length === 0){
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
            overlei.classList.remove('lock')
        }
    });