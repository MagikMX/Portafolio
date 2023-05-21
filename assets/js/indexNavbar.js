const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
    hero.classList.toggle("hide");
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})
