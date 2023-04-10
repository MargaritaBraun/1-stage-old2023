export class Article {
    
}


//import { cards } from 'shelter\src\cards.js'
/*
const BODY = document.querySelector('body');
const modalWindow = document.getElementById('myModal');

  let modalButtons = document.querySelectorAll('.btn-modal');
    modalButtons = Array.prototype.slice.call(modalButtons);
    modalButtons.forEach(function(modalButton) {
    modalButton.addEventListener('click', openmodalWindow);
  });

  function openmodalWindow(modalButton) {
    modalWindow.classList.toggle('active');
}

const closeModal = document.querySelector('.modal-close');
console.log(closeModal);
closeModal.addEventListener ('click', function (e) {
    modalWindow.classList.remove('active');
    //petscardmodalimg = '';
    let push = e.target.closest('.pets-card');
    if (!push) return;
    console.log(push);
    setDataForModal(push);
    //closeimg();
});

function setDataForModal(e) {
    let obj;
    for (let el of pets) {
        if (el.name === e.dataset.name) {
            obj = el;
        }
    }
    document.querySelectorAll('[data-pets]').forEach((el) => {
        if (el.dataset.pets === 'img') {
            el.src = obj.img;
        } else if (el.dataset.pets === 'inoculations' || el.dataset.pets === 'diseases' || el.dataset.pets === 'parasites') {
            let str = obj[el.dataset.pets].join(', ');
            el.textContent = str;
        } else {
            el.textContent = obj[el.dataset.pets];
        }
    })
}
*/