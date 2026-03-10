const menuIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".navigation");
const social= document.querySelector(".social-interaction");

menuIcon.addEventListener("click", function () {

    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        navMenu.style.backgroundColor = "#008DD5"; // sky blue
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.backgroundColor = "yellow";
        navMenu.style.padding = "70px";
        social.style.display ="flex";
        social.style.flexDirection = "row";
        social.style.paddingTop = "405px";
    }

});