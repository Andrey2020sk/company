"use strict";

function toggleTheme(){
    document.body.classList.toggle('darktheme');
}

let toggler = document.querySelectorAll(".menu .im")[3];
toggler.addEventListener("click",toggleTheme);
