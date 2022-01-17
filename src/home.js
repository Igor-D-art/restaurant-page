const homePage =(function(){

    const addTagline =(text)=>{
        
        const taglineDiv = document.createElement('div');
        taglineDiv.classList.add('tagline');
        const taglineSpan = document.createElement('span');
        taglineSpan.innerText = text;
        taglineDiv.appendChild(taglineSpan);

        const main = document.querySelector('.main');
        main.appendChild(taglineDiv);
    };

    const addImg = (link)=>{
        // creating an image container and the image itself
        const img = document.createElement('img');
        img.setAttribute('src', link);
      
        //adding image to the page
        const main = document.querySelector('.main');
        main.appendChild(img);
    };

    const addText = (text)=>{
        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.innerText=text;
        
        //adding text to the page
        const main = document.querySelector('.main');
        main.appendChild(textDiv);

    };


    const addFooter= (text)=>{
        // creating a header element
        const footer = document.createElement('footer');
        footer.innerHTML = text;
        
        // adding header with it's HTML content to the page
        const body = document.querySelector('body');
        body.appendChild(footer);
    };

    return {addTagline, addImg, addText, addFooter};
})();

export {homePage};

