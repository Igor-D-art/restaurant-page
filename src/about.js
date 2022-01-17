import '../src/about.css'

const aboutUs =(function(){

    const addAbout = (text)=>{
        const textDiv = document.createElement('div');
        textDiv.classList.add('aboutText');
        textDiv.innerText=text;
        
        //adding text to the page
        const main = document.querySelector('.main');
        main.appendChild(textDiv);
    };

    return {addAbout};
})();

export {aboutUs};