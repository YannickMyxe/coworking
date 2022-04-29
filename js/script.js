;"use strict";

let images = ["../img/Dice-1-b.svg.png", "../img/Dice-2-b.svg.png", "../img/Dice-3-b.svg.png", "../img/Dice-4-b.svg.png", "../img/Dice-5-b.svg.png", "../img/Dice-6-b.svg.png"];

function roll(){
    return Math.floor(Math.random()*6);
}

function diceRoll(el){
    let random = roll()
    el.setAttribute("src", images[random]);
    console.log(getValue(el.id))
}

function getValue(id){
    return document.querySelector("#" +id).getAttribute("src").match(/\d+/)[0];
}


// alert("Dylan was here")