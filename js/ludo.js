const aantalSpelers = 4;
const aantalPionen = 4;
const pionnen = [];
let turns = 0;
let steps = 0;

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



const pawn_space = document.querySelector(`.pawn-space`);
// pawn_space.appendChild(pawnSvg(1))

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

let g1 = pawn_space.children[0];
let g2 = pawn_space.children[1];
let g3 = pawn_space.children[2];
let g4 = pawn_space.children[3];

let y1 = pawn_space.children[4];
let y2 = pawn_space.children[5];
let y3 = pawn_space.children[6];
let y4 = pawn_space.children[7];

let b1 = pawn_space.children[8];
let b2 = pawn_space.children[9];
let b3 = pawn_space.children[10];
let b4 = pawn_space.children[11];

let r1 = pawn_space.children[12];
let r2 = pawn_space.children[13];
let r3 = pawn_space.children[14];
let r4 = pawn_space.children[15];

// g1.square.getBoundingClientRect().x = 150;


let dice = document.querySelector(".dice");
let roll = document.querySelector(".roll");
dice.addEventListener('click', () => {
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    if(diceRoll === 1) {
        roll.innerHTML = ("⚀");
    } else if(diceRoll === 2) {
        roll.innerHTML = ("⚁");
    }
    else if(diceRoll === 3) {
        roll.innerHTML = ("⚂");
    }
    else if(diceRoll === 4) {
        roll.innerHTML = ("⚃");
    }
    else if(diceRoll === 5) {
        roll.innerHTML = ("⚄");
    }
    else if(diceRoll === 6) {
        roll.innerHTML = ("⚅");
    }

    
})

const board_element = document.querySelector(".game");

const board = {
    x: board_element.getBoundingClientRect().x,
    y: board_element.getBoundingClientRect().y,
    width: board_element.getBoundingClientRect().width,
    height: board_element.getBoundingClientRect().height,
}
console.log(board)
const boardLocations = [
    {x: 170, y: 205},
    {x: 203, y: 205},
    {x: 236, y: 205},
    {x: 269, y: 205},
    {x: 302, y: 205},
    {x: 335, y: 205},
    {x: 368, y: 170},
    {x: 368, y: 138},
    {x: 368, y: 105},
    {x: 368, y: 70},
    {x: 368, y: 40},
    {x: 368, y: 5},
]

const positionElement = function (el, x, y) {
    el.style.position = 'absolute';
    el.style.left = board.x + x + 'px';
    el.style.top = board.y + y + 'px';
};

const doALoopForMe = async function() {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    for (let index = 0; index < boardLocations.length; index++) {
        await sleep(500);
        positionElement(r1, boardLocations[index].x, boardLocations[index].y);
    }
}();
