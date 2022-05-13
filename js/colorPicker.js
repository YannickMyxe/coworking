; "use strict";

(function() {
    const form = document.querySelector("#color-picker");
    const picker = document.querySelector("#color");
    const button = document.querySelector("#color-button");

    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    button.addEventListener('click', () => {
        const color = picker.value;
        console.log(color);
        document.querySelector(':root').style.setProperty('--primary', color); 
    });
}) ();
