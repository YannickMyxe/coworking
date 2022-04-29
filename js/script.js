;"use strict";

(function () {
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') == "true";
      this.setAttribute('aria-expanded', !expanded + "");

      let navbar = document.querySelector(".navbar");
     
      if (!expanded) { 
        navbar.style.display = "flex"

      }
      else {
        navbar.style.display = "none"; 
      }
    })
})()