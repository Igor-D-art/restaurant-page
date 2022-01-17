import '../src/index.css';
import {header} from './header.js';
import {homePage} from './home.js';
import {menu} from './menu.js';
import {footer} from './footer.js';
import {aboutUs} from './about.js';



init ();

function init () {
    header.addHeader('The Ocean Pizza')
    header.addNavi('Home','Menu', 'About');
    header.addMain();
    showHome();
    showFooter();
    


    // defining anchor links in menu 
    const menuLink = document.querySelector('#Menu');
    const homeLink = document.querySelector('#Home');
    const aboutLink = document.querySelector('#About');

    homeLink.classList.add('active');

    // adding event listeners to the menu items to display the right page
    menuLink.addEventListener('click', ()=>{
        clearMain();
        showMenu();
        menuLink.classList.add('active');
        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
    })

    homeLink.addEventListener('click', ()=>{
        clearMain();
        showHome();
        homeLink.classList.add('active');
        aboutLink.classList.remove('active');
        menuLink.classList.remove('active');
    })

    aboutLink.addEventListener('click', ()=>{
        clearMain();
        showAbout();
        aboutLink.classList.add('active');
        menuLink.classList.remove('active');
        homeLink.classList.remove('active');
    })

};

//function to clear the main div
function clearMain (){
    let mainSection = document.querySelector('.main');
    mainSection.innerText= '';
};

// function to display the Home page
function showHome (){
    homePage.addTagline("Ocean View With Pizza For You And Your Family");
    homePage.addImg('/src/restaurant.jpg');
    homePage.addText(`In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced, and is eaten with the use of a knife and fork.[2][3] In casual settings, however, it is cut into wedges 
    to be eaten while held in the hand.The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town 
    of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.[5] It has become one of the most popular foods in the world and a common fast food item in Europe, North America and Australasia; available at pizzerias 
    (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, via pizza delivery, and as street food.[5] Various food companies sell ready-baked pizzas, which may be frozen, in grocery stores, 
    to be reheated in a home oven.`);
    // homePage.addFooter('JUST A FOOTER');
};

// function to display the Menu page
function showMenu (){
    menu.addTagline ('Ocean pizza menu');
    menu.addCards();
};

// function to display footer
function showFooter (){
    footer.addFooter('THIS IS JUST A FOOTER');
};

// function to display the About us page
function showAbout (){
    aboutUs.addAbout(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
};
