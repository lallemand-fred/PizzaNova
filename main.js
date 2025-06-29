// ----------------------------------Animations déplacement et blur-------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entre) => {
    if (entre.isIntersecting) {
      entre.target.classList.add("show");
    } else {
      entre.target.classList.remove("show");
    }
  });
});

const slideElements = document.querySelectorAll(
  ".slidG, .slidD, .slidB, .slidH, .slidO"
);
slideElements.forEach((el) => observer.observe(el));


// ----------------------------------Menu burger----------------------------

const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

const links = document.querySelectorAll("nav li");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show-nav");
  });
});

// function toggleMenu() {
//   const navbar = document.querySelector(".navbar");
//   const burger = document.querySelector(".burger");
//   burger.addEventListener("click", () => {
//     navbar.classList.toggle("show-nav");
//   });
// }
// toggleMenu();
//------------------------------Page de chargement---------------------------
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});