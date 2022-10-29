

const sideBar = document.querySelector('.side__navbar');
const menu = document.querySelector('.navbar__left');
const burger = document.querySelector('.burger');
burger.addEventListener('click',()=>{
    burger.classList.toggle('burger_active');
    menu.classList.toggle('navbar__left_active');
})
