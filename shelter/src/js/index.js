//import { cards } from 'shelter\src\cards.js'
const modalWindow = document.getElementById('myModal');
let petscardmodalimg = document.querySelector('.modal-img');
//console.log(modalWindow);

//modalButton.addEventListener('click', openmodalWindow);
const modalpetscard = document.querySelectorAll('.pets-card');

function openmodalWindow(modalButton) {
    modalWindow.classList.toggle('active');
    const petsCard = this.parentElement;
    console.log(petsCard.target);
    addImgPet(petsCard);
}
const sliderCards = document.querySelector('.slider-cards');
const closeModal = document.querySelector('.modal-close');
console.log(closeModal);
closeModal.addEventListener ('click', function (e) {
    modalWindow.classList.remove('active');
    petscardmodalimg = '';
    let push = e.target.closest('.pets-card');
    if (!push) return;
    console.log(push);
    closeimg();
});

  const titlemodal = document.querySelector('.title-modal');
  const modalBlock = document.querySelector('.modai-block');
  console.log(titlemodal);
  titlemodal.innerHTML = 'dmksdvn';
  modalBlock.replaceWith(titlemodal);

  function addImgPet(petsCard) {
    //if ()
    let imgCard = petsCard.firstElementChild;
    let imgpetscardmodal = document.querySelector('.img-pets-card-modal');
    petscardmodalimg.replaceWith(imgCard);
    //console.log(imgpetscardmodal.target);
    //let atrFoto = imgCard.getAttribute('src');
    //console.log(atrFoto);
    
    //let template = '';
    //let img = document.createElement('img');
    //console.log(img);
    //petscardmodalimg.append(imgCard);
    //let newImg = img.setAttribute('src', 'shelter/src/img/our-pets-cards/pets-charly.png');
    //console.log(newImg);
    //petscardmodalimg.append(newImg);
   
    //petscardmodalimg.innerHTML('fdbnxfbjbxkn');
    //petscardmodalimg.insertAdjacentHTML('beforeBegin', `${img}`);

    function closeimg () {
        imgCard.replaceWith(petscardmodalimg);
    }
    
    //console.log(imgpetscardmodal);
    //petscardmodalimg.replaceChild(imgCard, imgpetscardmodal);
    //imgpetscardmodal = `${imgCard}`;
    //const copy = imgCard.cloneNode(true);
    //petscardmodalimg.replaceWith(copy, imgpetscardmodal);

    //const newimg = imgpetscardmodal.outerHTML.imgCard;
    //console.log(newimg);
    //imgpetscardmodal = outerHTML.imgCard;
    /*
    const imgmodal = imgpetscardmodal.getAttribute('src');
    const img = imgCard.getAttribute('src');
    console.log(img);
    console.log(imgmodal);
    imgpetscardmodal.setAttribute('src', `{img}`);
    img.className = 'img-pets-card';
    img.setAttribute('src',this.id);
    //this.data.src = `${imgCard}`;

    this.imgCard &&
    (template += `<img class="img" src=${this.atrFoto} alt="ddvvc">`)
    img.innerHTML = template;
    console.log(img);
    return img;

*/  
}