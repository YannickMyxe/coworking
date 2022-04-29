;"use strict";

let images = ["../img/Dice-1-b.svg.png", "../img/Dice-2-b.svg.png", "../img/Dice-3-b.svg.png", "../img/Dice-4-b.svg.png", "../img/Dice-5-b.svg.png", "../img/Dice-6-b.svg.png"];

function roll(){
    return Math.floor(Math.random()*6);
}

function diceRoll(el){
    let random = roll()
    el.setAttribute("src", images[random]);
    
}

function getValue(id){
    return document.querySelector("#dice-" +id).getAttribute("src").match(/\d+/)[0];
}

var canvas = document.getElementById("game-canvas");
var context = canvas.getContext("2d");



// alert("Dylan was here")