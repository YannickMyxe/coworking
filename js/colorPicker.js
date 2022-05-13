; "use strict";

(function() {
    const form = document.querySelector("#color-picker");
    const picker = document.querySelector("#color");
    const button = document.querySelector("#color-button");
    const playerSelector = document.querySelector(`#speler`);

    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    button.addEventListener('click', () => {
        const color = picker.value;
        const player = playerSelector.value;

        let property;
        switch(player) {
           case "player-1":  property = '--green-color'; break;
           case "player-2":  property = '--yellow-color'; break;
           case "player-3":  property = '--blue-color'; break;
           case "player-4":  property = '--red-color'; break;
        }

        document.querySelector(':root').style.setProperty(property, color); 
    });
}) ();
