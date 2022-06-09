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
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(4)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(4)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(9)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(4)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(3)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(4)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(7)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(4)").getBoundingClientRect(),
]

const board_starts = [42, 3, 16, 29];

const positionElement = function (el, x, y) {
    el.style.position = 'absolute';
    el.style.left = x + 5 - board.x+ 'px';
    el.style.top =  y + 5 - board.y+ 'px';
};

const doALoopForMe = async function() {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    for (let index = 0; index < boardLocations.length; index++) {
        await sleep(200);
        let location;
        if (index + board_starts[0] > boardLocations.length-1) location = index - boardLocations.length;
        else location = index;
        positionElement(g1, boardLocations[location + board_starts[0]].x, boardLocations[location + board_starts[0]].y);
    }
}();

positionElement(y1, boardLocations[board_starts[1]].x, boardLocations[board_starts[1]].y)
positionElement(g1, boardLocations[board_starts[0]].x, boardLocations[board_starts[0]].y)
positionElement(r1, boardLocations[board_starts[2]].x, boardLocations[board_starts[2]].y)
positionElement(b1, boardLocations[board_starts[3]].x, boardLocations[board_starts[3]].y)
