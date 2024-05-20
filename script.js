

document.addEventListener("DOMContentLoaded", function(){
const darkMode = document.getElementById("darkModeButton");
const p = document.getElementById("info");

darkMode.addEventListener("click", toggleD);

function toggleD(){

        var background = document.body
        background.style.background="black";
        darkMode.textContent="light";
        p.style.color="white";
        
        
}


});


    

