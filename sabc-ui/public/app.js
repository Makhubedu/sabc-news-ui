const humb = document.querySelector(".humburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

humb.addEventListener('click', () => {
    console.log("Hello world I am Mr Derrick")
    navLinks.classList.toggle("open");
})