const homePage =(function(){

   const body = document.querySelector('body');
   
   const addHeader = (text)=>{

        // creating a header element
        const header = document.createElement('header');
        header.innerHTML = text;
        
        // adding header with it's HTML content to the page
        body.appendChild(header);
    };

    const addNavi = function(...theArgs){
        // extracting arguments array-like object
        let args = arguments;
        let argsLength = arguments.length;
        
        // creating navigation block
        const navi = document.createElement('nav');
        const list = document.createElement('ul');

        const addLiItems = function(){
            for(let i=0; i<argsLength; i++){
               let liItem = document.createElement('li');
               let link = args[i]; // need to check this
               liItem.innerHTML = link;
               list.appendChild(liItem);
            };
        };

        // adding list items to the unordered list
        addLiItems();

        // adding the unordered list to the nav section and nav section to the body section before the content block
        navi.appendChild(list);
        body.appendChild(navi);
    };

    const addMain = ()=>{
        const mainSection = document.createElement('div');
        mainSection.classList.add('main');
        body.appendChild(mainSection);
    };

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
        body.appendChild(footer);
    };

    return {addHeader, addNavi, addMain, addTagline, addImg, addText, addFooter};
})();

export {homePage};

