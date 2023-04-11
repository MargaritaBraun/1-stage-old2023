///const exports = require("webpack");

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
        article.className = 'pets-card';
        article.setAttribute('data-id', this.id);

        this.img &&
        (template += `<img class="img-pets-card" src=${this.img} alt = "img-pets-card">`)

        this.name &&
        (template += `<h3 class="title-modal">${this.img}</h3>`)

        if (this.type || this.breed) {
            template += `<h4 class="type-modal"><span>${this.type}</span> - <span>${this.breed}</span></h4>`
        }

        this.description &&
        (template += `<p class="description-modal">${this.description}</p>>`)

        this.age &&
        (template += `<p class="age-modal options"><span class="title-options">Age: </span>${this.age}</p>`)

        if (this.inoculations) {
            (template += `<div class="inoculations-modal options"><span class="title-options">Inoculations:</span>`)

            this.inoculations.map(inoculation => {
                template += `<span>${inoculation}</span>`
            })
           template += `</div>`
        }
        
        article.innerHTML = template;
        console.log(article);
        return article;
    }
    
}

//export default  generateArticle;
