import '../src/nav.css';

const navigation = (function(){
    // const content = document.querySelector('content')
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

    return {addHeader, addNavi, addMain};

})();

export {navigation};