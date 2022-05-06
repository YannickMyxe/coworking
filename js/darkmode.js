; "use strict";

(function() {

    let lclTheme = localStorage.getItem("theme");
    if (!lclTheme) {
        localStorage.setItem("theme", 'light');
        lclTheme = "light";
    }
    document.documentElement.setAttribute("data-theme", lclTheme);

    // Get our button switcher
    let themeSwitcher = document.getElementById("theme-switcher");

    // When our button gets clicked
    themeSwitcher.onclick = function() {
      // Get the current selected theme, on the first run
      // it should be `light`
      let currentTheme = document.documentElement.getAttribute("data-theme");

      // Switch between `dark` and `light`
      let switchToTheme = currentTheme === "dark" ? "light" : "dark"

      // Set our currenet theme to the new one
      document.documentElement.setAttribute("data-theme", switchToTheme);
      localStorage.setItem("theme", switchToTheme)

      themeSwitcher.innerText = `Switch to ${switchToTheme} mode`;

    }

}) ();