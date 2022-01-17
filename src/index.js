import '../src/index.css';
import {header} from './header.js';
import {homePage} from './home.js';
import {menu} from './menu.js';
import {footer} from './footer.js';



init ();

function init () {
    header.addHeader('The Ocean Pizza')
    header.addNavi('Home','Menu', 'About Us', 'Contacts');
    header.addMain();
    showHome();
    showFooter();


    // defining anchor links in menu 
    const menuLink = document.querySelector('#Menu');
    const homeLink = document.querySelector('#Home');

    // adding event listeners to the menu items to display the right page
    menuLink.addEventListener('click', ()=>{
        let mainSection = document.querySelector('.main');
        mainSection.innerText= '';
        showMenu();
    })

    homeLink.addEventListener('click', ()=>{
        let mainSection = document.querySelector('.main');
        mainSection.innerText= '';
        showHome();
    })

};


// function to display the Home page
function showHome (){
    homePage.addTagline("Ocean View With Pizza For You And Your Family");
    homePage.addImg('/src/restaurant.jpg');
    homePage.addText(`In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced, 
    and is eaten with the use of a knife and fork.[2][3] In casual settings, however, it is cut into wedges 
    to be eaten while held in the hand.
    The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town 
    of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and 
    its variants have since become popular in many countries.[5] It has become one of the most popular foods 
    in the world and a common fast food item in Europe, North America and Australasia; available at pizzerias 
    (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, via pizza delivery, and 
    as street food.[5] Various food companies sell ready-baked pizzas, which may be frozen, in grocery stores, 
    to be reheated in a home oven.
    In 2017, the world pizza market was US$128 billion, and in the US it was $44 billion spread over 76,000 
    pizzerias.[6] Overall, 13% of the U.S. population aged 2 years and over consumed pizza on any given day.[7]
    The Associazione Verace Pizza Napoletana (lit. True Neapolitan Pizza Association) is a non-profit 
    organization founded in 1984 with headquarters in Naples that aims to promote traditional Neapolitan pizza.
    [8] In 2009, upon Italy's request, Neapolitan pizza was registered with the European Union as a Traditional 
    Speciality Guaranteed dish,[9][10] and in 2017 the art of its making was included on UNESCO's list of 
    intangible cultural heritage.[11]`);
    // homePage.addFooter('JUST A FOOTER');
};

// function to display the Menu page
function showMenu (){
    menu.addTagline ('Here is our menu!');
};

// function to display footer
function showFooter (){
    footer.addFooter('THIS IS JUST A FOOTER')
};