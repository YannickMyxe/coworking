;"use strict";

let images = ["../img/Dice-1-b.svg.png", "../img/Dice-2-b.svg.png", "../img/Dice-3-b.svg.png", "../img/Dice-4-b.svg.png", "../img/Dice-5-b.svg.png", "../img/Dice-6-b.svg.png"];
let dice = document.querySelectorAll("img");
function roll(){
    return Math.floor(Math.random()*6);
}

function diceroll(el){
    console.log(el.id);
    document.querySelector("#" + el.id).setAttribute("src", images[roll()]);
}
document.querySelector("#dice-1").setAttribute("src", images[roll()]);
document.querySelector("#dice-2").setAttribute("src", images[roll()]);
document.querySelector("#dice-3").setAttribute("src", images[roll()]);
document.querySelector("#dice-4").setAttribute("src", images[roll()]);

// alert("Dylan was here")