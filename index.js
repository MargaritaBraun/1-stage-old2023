import  { Article } from "./src/js/Article";
import  { Hamburger } from "./src/js/Hamburger";

const data = [
    {
      "id": 1,
      "name": "Jennifer",
      "img": "./src/img/our-pets-cards/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 2,
      "name": "Sophia",
      "img": "./src/img/our-pets-cards/sofi.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 3,
      "name": "Woody",
      "img": "./src/img/our-pets-cards/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id": 4,
      "name": "Scarlett",
      "img": "./src/img/our-pets-cards/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 5,
      "name": "Katrine",
      "img": "./src/img/our-pets-cards/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "id": 6,
      "name": "Timmy",
      "img": "./src/img/our-pets-cards/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
        "id": 7,
      "name": "Freddie",
      "img": ".src/img/our-pets-cards/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "id": 8,
      "name": "Charly",
      "img": "./src/img/our-pets-cards/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
  //
    const BODY = document.querySelector('body');
    const modalWindow = document.getElementById('myModal');
    let petscardmodalimg = document.querySelector('.modal-img');
    const modalpetscard = document.querySelectorAll('.pets-card');
    
    let modalButtons = document.querySelectorAll('.btn-modal');
    modalButtons = Array.prototype.slice.call(modalButtons);
    modalButtons.forEach(function(modalButton) {
    modalButton.addEventListener('click', openmodalWindow);
    });

    function openmodalWindow(modalButton) {
        if(modalButton) {
            modalWindow.classList.add('active');
            const petsCard = this.parentElement;
            findAttribute(petsCard, modalButton);
            addImgPet(petsCard);
        } else {
            modalWindow.classList.remove('active');
        }
    };

    const findAttribute = (petsCard, modalButton) => {
      //console.log();
          let fuyndID = petsCard.getAttribute('data-id');
              console.log(fuyndID);
            findDataObj(fuyndID);
    };
    
    const findDataObj = (fuyndID) =>{
      //console.log(data);
      //console.log(fuyndID);
      //let findDataid = data[0].id;
      //
      //let numberArgym = 3;
      let dataId = data.find(item => item.id == fuyndID)
      console.log(dataId);
      renderArticlesToDom(dataId);
      //findimgtrue();
    };

    /*const findimgtrue = (dataId) => {
      //let dataIMG = dataId.['img'];
      console.log(dataIMG);
    };*/
             ///закрыть модальное окно
        const closeModal = document.querySelector('.modal-close-button');
       
        closeModal.addEventListener('click', function (event) {
        modalWindow.classList.remove('active');
        });
                ///закрыть модальное окно

    function addImgPet(petsCard, dataId) {
      //let imgCard = petsCard.firstElementChild;
      let imgpetscardmodal = document.querySelector('.img-pets-card');

      //let newimg = imgpetscardmodal.innerHTML = `<img src="${dataId.[1]}" alt="img-pets-card" class="img-pets-card"></img>`
      console.log(imgpetscardmodal);
     // if ()
        /*
       
        let newImg = imgCard.cloneNode(false);
        petscardmodalimg.replaceWith(newImg);*/
    }
    const renderArticlesToDom = (dataId, article) => {
      let conteinerModal = document.querySelector('.modal-content');
      console.log(conteinerModal);
      conteinerModal.innerHTML = '';
      let modal = new Article(dataId);
      let newModal = modal.generateArticle();
      console.log(modal.generateArticle());
      conteinerModal.replaceWith(modal.generateArticle());
      //showArticle();
    }

    const showArticle = (dataId, article) => {
      let modal = new Article(dataId);
      let newModal = modal.generateArticle();
      //conteinerModal.insertAdjacentElement('beforebegin', newModal);
      console.log(modal.generateArticle());
    };
    

    
/*
const deleteContextModal = () => {
        //petscardmodalimg.insertAdjacentElement = '';
       // console.log(petscardmodalimg);
       console.log(petscardmodalimg);
        //return petscardmodalimg;
    }
  window.onload = function() {
    console.log(data);

    if(data) {
        renderArticlesToDom();
    }
  }

  const renderArticlesToDom = () => {
    let strategiesWrapper = getstrategiesWrapper();
    generateArticle(data);
    
  }

  const getstrategiesWrapper = () => {
    const strategiesContainer = document.querySelector('.modal');
    //console.log(push);

  };

  const generateArticle = (data) => {
    let article = [];
    data.forEach(article => {
        articles.push(new Article(article))
    });
    return articles;
  }
 */