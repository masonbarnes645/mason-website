

document.addEventListener("DOMContentLoaded", function(){
const darkMode = document.getElementById("light");

darkMode.addEventListener("click", toggleD);

function toggleD(){
        var background = document.body
        background.classList.toggle("darken");
}


});


    

