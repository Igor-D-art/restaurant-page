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

    return {addTagline};
})();

export {menu};