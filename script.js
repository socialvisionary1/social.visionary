var menu = document.querySelector(".menu");
var menuScreen = document.querySelector(".menu-screen");
var back = document.querySelector(".back");
var main = document.querySelector(".main");

menu.addEventListener("click",function(){
    menuScreen.style.display = "flex"
})

back.addEventListener("click",function(){
    menuScreen.style.display = "none"
})