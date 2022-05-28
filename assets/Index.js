const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*NavBar*/
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-menu');
    })
}
/*NavClose*/
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove('show-menu');
    })
}
const navLinks = document.querySelectorAll('.nav-link');
function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener("click", linkAction));

/*Scroll Header*/
function scrollHeader(){
const header = document.getElementById('header');
if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*Theme-Customization*/
const theme = document.querySelector('#theme-button');
const themeModel = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


theme.addEventListener("click", ()=>{
    themeModel.style.display = 'grid';
})
themeModel.addEventListener("click", (e)=>{
    if (e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
})

//Font Size
const removeSizeSelector = () =>{
    fontSizes.forEach((size)=>{
        size.classList.remove('active');
    })
}
fontSizes.forEach((size)=>{
    size.addEventListener("click", ()=>{
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '12px';
        }else if(size.classList.contains('font-size-2')){
            fontSize = '14px';
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        }else if(size.classList.contains('font-size-4')){
            fontSize = '18px';
        }
        //change font-size of root.html element
        document.querySelector('html').style.fontSize = fontSize;
        })
})

//COLOR

//primary colors

const removeColorSelector = ()=>{
    colorPalette.forEach((color)=>{
        color.classList.remove('active');
    })
}
colorPalette.forEach(color =>{
    color.addEventListener("click", ()=>{
        removeColorSelector();
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-col-hue', primaryHue);
    })
})

//Theme Backgrounds

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background
const changeBG = ()=>{
    root.style.setProperty("--light-col-lightness", lightColorLightness);
    root.style.setProperty("--white-col-lightness", whiteColorLightness);
    root.style.setProperty("--dark-col-lightness", darkColorLightness);
}
Bg1.addEventListener("click", ()=>{
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    //add active class
    Bg1.classList.add("active");
    //remove active
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    //removing customized changes from local storage
    window.location.reload();
})
Bg2.addEventListener("click", ()=>{
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    //add active class
    Bg2.classList.add("active");
    //remove active
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
})
Bg3.addEventListener("click", ()=>{
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    //add active class
    Bg3.classList.add("active");
    //remove active
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
})

//PORTFOLIO Item Filter

const filterContainer = document.querySelector(".portfolio-filter-inner"),
     filterBtns = filterContainer.children,
     totalFilterBtn = filterBtns.length,
     portfolioItems = document.querySelectorAll(".portfolio-item"),
     totalPortfolioItem = portfolioItems.length;

     for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for (let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })
    }

// Selected Nav links

//getting all the sections that have id defined

const sections = document.querySelectorAll("section[id]");
//add an event listener listening from the scroll

window.addEventListener("scroll", navHighLighter);

function navHighLighter(){
    let scrollY = window.pageYOffset;
    //Now we loop through sections to get height, top and ID values for each
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        /* -If our current current scroll position enters the space where current section on screen is, add .active class to
        corresponding navigation link, else remove it
        -To know which link needs on active class, we use sectionId variable we are getting while looping through sections
        as an selection */
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link");
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    })
};
