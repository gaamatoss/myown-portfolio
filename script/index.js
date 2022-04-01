const btnMenu = document.querySelector(".menu__button")
const navMenu = document.querySelector(".menu__nav")

btnMenu.addEventListener("click", function(){
    navMenu.classList.toggle('menu__mobile') 
})