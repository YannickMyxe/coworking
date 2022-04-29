;"use strict";
(function () {
 

    let images = ["../img/Dice-1-b.svg.png", "../img/Dice-2-b.svg.png", "../img/Dice-3-b.svg.png", "../img/Dice-4-b.svg.png", "../img/Dice-5-b.svg.png", "../img/Dice-6-b.svg.png"];
    const dice = document.querySelectorAll('.dice-wrapper');

    function roll(){
        return Math.floor(Math.random()*6);
    }
    for (let i = 0; i < dice.length; i++) {
        dice[i].addEventListener("click", function() {
          diceRoll(dice[i].firstElementChild);
        });
    }
    function diceRoll(el){
        let random = roll()
        el.setAttribute("src", images[random]);
        console.log(getValue(2));
    }
    
    function getValue(id){
        return document.querySelector("#dice-" +id).getAttribute("src").match(/\d+/)[0];
    }

})()








// alert("Dylan was here")