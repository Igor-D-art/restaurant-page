import '../src/footer.css'

const footer =(function(){

    const addFooter= (text)=>{
        // creating a header element
        const footer = document.createElement('footer');
        footer.innerHTML = text;
        
        // adding header with it's HTML content to the page
        const body = document.querySelector('body');
        body.appendChild(footer);
    };

    return {addFooter};
})();

export {footer};