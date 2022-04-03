const btnMenu = document.querySelector(".menu__button")
const navMenu = document.querySelector(".menu__nav")
const sendButton = document.querySelector("#sendButton")
const sendMessage = document.querySelector(".submit__message")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageInput = document.querySelector("#message")

btnMenu.addEventListener("click", function(){
    navMenu.classList.toggle('menu__mobile') 
})
