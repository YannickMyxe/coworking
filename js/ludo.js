const aantalSpelers = 4;
const aantalPionen = 4;
const pionnen = [];

const colors = [
    "green-color",
    "yellow-color",
    "blue-color",
    "red-color"
];

const homeSquares = {
    "green"  : document.querySelectorAll(`.square_green`),
    "yellow" : document.querySelectorAll(`.square_yellow`),
    "blue"   : document.querySelectorAll(`.square_blue`),
    "red"    : document.querySelectorAll(`.square_red`)
};

const pawnColors = [
    "green-pawn",
    "yellow-pawn",
    "blue-pawn",
    "red-pawn",
];
// 👉️
const keys = Object.keys(homeSquares);

keys.forEach(houseKey => {
    //console.log(houseKey);
    homeSquares[houseKey].forEach(square => {
        const pos = square.getBoundingClientRect();
        const point = {
            "x": pos.x,
            "y": pos.y
        }
        //console.log(point);  
    })
})

const pawnSvg = (index) => { 
    let dylan = document.createElement("svg");
    let juliette = document.createElement("path");
    let marianne = document.createElement("path");
    let francis  = document.createElement("polygon");

    dylan.classList.add(pawnColors[index]);
    dylan.setAttribute("version", "1.1");
    dylan.setAttribute("x", "0px");
    dylan.setAttribute("y", "0px");
    dylan.setAttribute("viewbox", "0 0 60 60");
    dylan.setAttribute("style", "enable-background:new 0 0 60 60:");

    
    
    juliette.setAttribute("d", "M20.5,31h1.383l-0.667,6h17.568l-0.667-6H39.5c2.481,0,4.5-2.019,4.5-4.5S41.981,22,39.5,22H35v-3.353 c2.984-1.732,5-4.955,5-8.647c0-5.514-4.486-10-10-10S20,4.486,20,10c0,3.691,2.016,6.915,5,8.647V22h-4.5 c-2.481,0-4.5,2.019-4.5,4.5S18.019,31,20.5,31z M29,5c0.552,0,1,0.447,1,1s-0.448,1-1,1c-1.103,0-2,0.897-2,2c0,0.553-0.448,1-1,1 s-1-0.447-1-1C25,6.794,26.794,5,29,5z M20.5,24H25h10h4.5c1.378,0,2.5,1.121,2.5,2.5S40.878,29,39.5,29h-1.604H22.105H20.5 c-1.378,0-2.5-1.121-2.5-2.5S19.122,24,20.5,24z")
    dylan.appendChild(juliette);
    francis.setAttribute("points", "20.661,42 39.34,42 39.007,39 20.994,39");
    dylan.appendChild(francis);
    marianne.setAttribute("d", "M44,53v-1.843c0-2.274-1.837-4.123-4.104-4.152L39.562,44H20.438l-0.334,3.005C17.837,47.034,16,48.883,16,51.157V53h-2v7 h32v-7H44z")
    dylan.appendChild(marianne)
    console.log(dylan);
    


    return dylan;
};




const pawn_space = document.querySelector(`.pawn-space`);
pawn_space.appendChild(pawnSvg(1))

// for (let index = 0; index < (aantalPionen * aantalSpelers); index++) {
//     pawn_space.appendChild( pawnSvg(index % aantalSpelers) );
// };


