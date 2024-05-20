

document.addEventListener("DOMContentLoaded", function(){
const darkMode = document.getElementById("darkModeButton");
const p = document.getElementById("info");
const h1 = document.getElementById("hOne");
const h2 = document.getElementById("hTwo");
const link = document.getElementById("mail");
let isDarkMode = true;



darkMode.addEventListener("click", toggleD);

function toggleD(){

var background = document.body;

if(isDarkMode) {
        background.style.background="black";
        darkMode.textContent="Light";
        p.style.color="white";
        h1.style.color="white";
        h2.style.color="white"; 
        mail.style.color="white"; 
        isDarkMode = false; }
else {
        background.style.background="white";
        darkMode.textContent="Dark";
        p.style.color="black";
        h1.style.color="black";
        h2.style.color="black";
        mail.style.color="black";  
        isDarkMode = true;
}}

});


    

