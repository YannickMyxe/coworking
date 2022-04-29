;"use strict";

let images = ["../img/Dice-1-b.svg.png", "../img/Dice-2-b.svg.png", "../img/Dice-3-b.svg.png", "../img/Dice-4-b.svg.png", "../img/Dice-5-b.svg.png", "../img/Dice-6-b.svg.png"];
let dice = document.querySelectorAll("img");
let diceroll;
function roll(){
    return Math.floor(Math.random()*6);
}
diceroll = roll();
document.querySelector("#dice-1").setAttribute("src", images[diceroll]);
console.log(diceroll);
// alert("Dylan was here")