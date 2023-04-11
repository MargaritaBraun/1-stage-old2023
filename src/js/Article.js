export class Article {
    constructor({ id, name, img, type, breed, description, age, inoculations, diseases, parasites}) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }

    // Article generator
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'modal-content';
        article.setAttribute('data-id', this.id);
        
        template += `<div class="modal-img">`;
        this.img &&
        (template += `<img class="img-pets-card-modal" src=${this.img} alt = "img-pets-card-modal">`)
        template += `</div>`;
        template += `<div class="modal-block">`;
        this.name &&
        (template += `<h3 class="title-modal">${this.name}</h3>`)

        if (this.type || this.breed) {
            template += `<h4 class="type-modal"><span>${this.type}</span> - <span>${this.breed}</span></h4>`
        }

        this.description &&
        (template += `<p class="description-modal">${this.description}</p>`)
        template += `<ul class="list-modal">`;
        this.age &&
        (template += `<li class="age-modal options"><span class="title-options">Age: </span>${this.age}</li>`)

        if (this.inoculations) {
            (template += `<li class="inoculations-modal options"><span class="title-options">Inoculations:</span>`)

            this.inoculations.map(inoculation => {
                template += `<span>${inoculation}</span>`
            })
           template += `</li>`
        }
        if (this.diseases) {
            (template += `<li class="diseases-modal options"><span class="title-options">Diseases:</span><span>${this.diseases}</span></li>`)
        }
        if (this.parasites) {
            (template += `<li class="parasites-modal options"><span class="title-options">Parasites:</span><span>${this.parasites}</span></li>`);
        }
        template += `</ul>`;
        template += `</div>`;
        article.innerHTML = template;
        console.log(article);
        return article;
    }
    
}

//console.log(article);
//module.exports = generateArticle;
//export default  generateArticle;
