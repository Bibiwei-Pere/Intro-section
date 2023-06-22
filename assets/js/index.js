// ?Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenus = document.querySelector(".nav-menu-1");
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const body = document.querySelector(".body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenus.classList.toggle("active");
  navMenu.classList.toggle("active");
  navClose.classList.toggle("active");
  body.classList.toggle("active");
}

// Close navbar when link is clicked
const closeNav = document.querySelectorAll(".close");

closeNav.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenus.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navClose.classList.remove("active");
  navMenus.classList.remove("active");
  body.classList.remove("active");
  navMenu.classList.remove("active");
}

// Dropdown
const dropdown = document.querySelector(".dropdown");
const openMenu = document.querySelector(".drop-menu");

dropdown.addEventListener("click", dropMenu);
function dropMenu() {
  openMenu.classList.toggle("active");
}

// Dropdown 2
const dropdowns = document.querySelector(".dropdown-2");
const openMenus = document.querySelector(".drop-menu-2");

dropdowns.addEventListener("click", dropMenus);
function dropMenus() {
  openMenus.classList.toggle("active");
}
