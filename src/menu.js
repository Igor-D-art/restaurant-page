import '../src/menu.css';

const menu = (function (){

    

    const addTagline = (text)=>{
    
        const taglineDiv = document.createElement('div');
        taglineDiv.classList.add('tagline');
        const taglineSpan = document.createElement('span');
        taglineSpan.innerText = text;
        taglineDiv.appendChild(taglineSpan);
        const main = document.querySelector('.main');
        main.appendChild(taglineDiv);
    };

    const addCards = ()=>{
        const main = document.querySelector('.main');
        const pizzas = document.createElement('div');
        pizzas.setAttribute('class', 'pizzas')
        let i = 1;
        do {
            let pizzaCard = document.createElement('div');
            pizzaCard.setAttribute('class', 'card');
            let pizzaImg = document.createElement('img');
            let imgSrc = pizzaImg.setAttribute('src', '/src/pizza' + `${i}` + '.jpeg');
            let pizzaName = document.createElement('div');
            pizzaName.classList.add('pName');
            pizzaName.innerText = 'Margarita. Price: $15';
            pizzaCard.appendChild(pizzaImg);
            pizzaCard.appendChild(pizzaName);
            pizzas.appendChild(pizzaCard)
            main.appendChild(pizzas);
            i+=1;
        } while (i<9);
    
    };

    return {addTagline, addCards};
})();

export {menu};