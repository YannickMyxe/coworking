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

let r1 = pawn_space.children[8];
let r2 = pawn_space.children[9];
let r3 = pawn_space.children[10];
let r4 = pawn_space.children[11];

let b1 = pawn_space.children[12];
let b2 = pawn_space.children[13];
let b3 = pawn_space.children[14];
let b4 = pawn_space.children[15];

// g1.square.getBoundingClientRect().x = 150;


let dice = document.querySelector(".dice");
let roll = document.querySelector(".roll");
let turn = 1;
let gameTurnGreen = 1;
let gameTurnYellow = 1;
let gameTurnRed = 1;
let gameTurnBlue = 1;
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

    if(turn === 1) {
        document.querySelector('.turn-message').innerHTML = `<p>Player 1's turn</p>`;
        if(gameTurnGreen === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`
            } else {
                gameTurnGreen++;
                return;
            }
        } else {
            //Code om te verplaatsen
        }
        turn++;
    } else if(turn === 2) {
        document.querySelector('.turn-message').innerHTML = `<p>Player 2's turn</p>`;
        if(gameTurnYellow === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`
            } else {
                gameTurnYellow++;
                return;
            }
        } else {
            //Code om te verplaatsen
        }
        turn++;
    } else if(turn === 3) {
        document.querySelector('.turn-message').innerHTML = `<p>Player 3's turn</p>`;
        if(gameTurnRed === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`
            } else {
                gameTurnRed++;
                return;
            }
        } else {
            //Code om te verplaatsen
        }
        turn++;
    } else {
        document.querySelector('.turn-message').innerHTML = `<p>Player 4's turn</p>`;
        if(gameTurnBlue === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`
            } else {
                gameTurnBlue++;
                return;
            }
        } else {
            //Code om te verplaatsen
        }
        turn = 1;
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
        if (index + board_starts[3] > boardLocations.length-1) 
            location = index - boardLocations.length;
        else location = index;
            positionElement(r1, boardLocations[location + board_starts[3]].x, boardLocations[location + board_starts[3]].y);
    }
}();

positionElement(y1, boardLocations[board_starts[1]].x, boardLocations[board_starts[1]].y)
positionElement(g1, boardLocations[board_starts[0]].x, boardLocations[board_starts[0]].y)
positionElement(r1, boardLocations[board_starts[2]].x, boardLocations[board_starts[2]].y)
positionElement(b1, boardLocations[board_starts[3]].x, boardLocations[board_starts[3]].y)



const greenSquare1 = document.querySelector('.square_green:nth-child(1)');
const greenSquare2 = document.querySelector('.square_green:nth-child(2)');
const greenSquare3 = document.querySelector('.square_green:nth-child(3)');
const greenSquare4 = document.querySelector('.square_green:nth-child(4)');
const yellowSquare1 = document.querySelector('.square_yellow:nth-child(1)');
const yellowSquare2 = document.querySelector('.square_yellow:nth-child(2)');
const yellowSquare3 = document.querySelector('.square_yellow:nth-child(3)');
const yellowSquare4 = document.querySelector('.square_yellow:nth-child(4)');
const redSquare1 = document.querySelector('.square_red:nth-child(1)');
const redSquare2 = document.querySelector('.square_red:nth-child(2)');
const redSquare3 = document.querySelector('.square_red:nth-child(3)');
const redSquare4 = document.querySelector('.square_red:nth-child(4)');
const blueSquare1 = document.querySelector('.square_blue:nth-child(1)');
const blueSquare2 = document.querySelector('.square_blue:nth-child(2)');
const blueSquare3 = document.querySelector('.square_blue:nth-child(3)');
const blueSquare4 = document.querySelector('.square_blue:nth-child(4)');
positionElement(g1, greenSquare1.getBoundingClientRect().x+8, greenSquare1.getBoundingClientRect().y+8)
positionElement(g2, greenSquare2.getBoundingClientRect().x+8, greenSquare2.getBoundingClientRect().y+8)
positionElement(g3, greenSquare3.getBoundingClientRect().x+8, greenSquare3.getBoundingClientRect().y+8)
positionElement(g4, greenSquare4.getBoundingClientRect().x+8, greenSquare4.getBoundingClientRect().y+8)

positionElement(y1, yellowSquare1.getBoundingClientRect().x+8, yellowSquare1.getBoundingClientRect().y+8)
positionElement(y2, yellowSquare2.getBoundingClientRect().x+8, yellowSquare2.getBoundingClientRect().y+8)
positionElement(y3, yellowSquare3.getBoundingClientRect().x+8, yellowSquare3.getBoundingClientRect().y+8)
positionElement(y4, yellowSquare4.getBoundingClientRect().x+8, yellowSquare4.getBoundingClientRect().y+8)

positionElement(b1, blueSquare1.getBoundingClientRect().x+8, blueSquare1.getBoundingClientRect().y+8)
positionElement(b2, blueSquare2.getBoundingClientRect().x+8, blueSquare2.getBoundingClientRect().y+8)
positionElement(b3, blueSquare3.getBoundingClientRect().x+8, blueSquare3.getBoundingClientRect().y+8)
positionElement(b4, blueSquare4.getBoundingClientRect().x+8, blueSquare4.getBoundingClientRect().y+8)

positionElement(r1, redSquare1.getBoundingClientRect().x+8, redSquare1.getBoundingClientRect().y+8)
positionElement(r2, redSquare2.getBoundingClientRect().x+8, redSquare2.getBoundingClientRect().y+8)
positionElement(r3, redSquare3.getBoundingClientRect().x+8, redSquare3.getBoundingClientRect().y+8)
positionElement(r4, redSquare4.getBoundingClientRect().x+8, redSquare4.getBoundingClientRect().y+8)