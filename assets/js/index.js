// ?Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const body = document.querySelector(".body");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  navClose.classList.toggle("active");
  body.classList.toggle("active");
  navbar.classList.toggle("active");
}

// Close navbar when link is clicked
const closeNav = document.querySelectorAll(".close");

closeNav.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("active");
  navbar.classList.remove("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navClose.classList.remove("active");
  body.classList.remove("active");
  navbar.classList.remove("active");
  navMenu.classList.remove("active");
}

// Dropdown 2
const desplegable = document.querySelectorAll(".desplegable");
const menu_desplegable = document.querySelectorAll(".menu_desplegable");
const arrowDown = document.querySelectorAll(".arrow-down");

for (let i = 0; i < desplegable.length; i++) {
    const desplegables = desplegable[i];
    
    desplegables.addEventListener("click", ()=>{
        desplegables.classList.toggle("active")
        arrowDown[i].classList.toggle("active");
        if(desplegables.classList.contains("active")){
            menu_desplegable[i].style.display = "flex";   
        } else {
            menu_desplegable[i].style.display = "none";  
        }
    })
}
