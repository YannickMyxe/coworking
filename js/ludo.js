const aantalSpelers = 4;
const aantalPionen = 4;
const pionnen = [];
let turns = 0;
let steps = 0;
const clickSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_63c49c13c8.mp3?filename=button-pressed-38129.mp3');

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

const green_pawns = [g1, g2, g3, g4];
const yellow_pawns = [y1, y2, y3, y4];
const blue_pawns = [b1, b2, b3, b4];
const red_pawns = [r1, r2, r3, r4];

const pawn_objects = green_pawns.concat(yellow_pawns).concat(blue_pawns).concat(red_pawns);

let dice = document.querySelector(".dice");
let roll = document.querySelector(".roll");
let turn = 1;
let gameTurnGreen = 1;
let gameTurnYellow = 1;
let gameTurnRed = 1;
let gameTurnBlue = 1;
const active_pawn = [0, 0, 0, 0];

let playable = true;

dice.addEventListener('click', () => {

    if (!playable) return;

    clickSound.play();
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
        document.querySelector('.turn-message').innerHTML += `<p></p>`;

        if(gameTurnGreen === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML = `<p>Player 1's turn</p>`;
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`;
            } else {
                gameTurnGreen++;
                return;
            }
        } else {
            if(diceRoll === 6) {
                positionGreen();
                move_player(0, active_pawn[0], diceRoll);
            } else {
                move_player(0, active_pawn[0], diceRoll);
            }
        }
        turn++;
    } else if(turn === 2) {
        document.querySelector('.turn-message').innerHTML = `<p>Player 2's turn</p>`;
        document.querySelector('.turn-message').innerHTML += `<p></p>`;

        if(gameTurnYellow === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML = `<p>Player 2's turn</p>`;
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`;
            } else {
                gameTurnYellow++;
                return;
            }
        } else {
            if(diceRoll === 6) {
                positionYellow();
                move_player(1, active_pawn[1], diceRoll);
            } else {
                move_player(1, active_pawn[1], diceRoll);
            }
        }
        turn++;
    } else if(turn === 3) {
        document.querySelector('.turn-message').innerHTML = `<p>Player 3's turn</p>`;
        document.querySelector('.turn-message').innerHTML += `<p></p>`;

        if(gameTurnRed === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML = `<p>Player 3's turn</p>`;
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`;
            } else {
                gameTurnRed++;
                return;
            }
        } else {
            if(diceRoll === 6) {
                positionRed();
                move_player(2, active_pawn[2], diceRoll);
            } else {
                move_player(2, active_pawn[2], diceRoll);
            }
        }
        turn++;
    } else {
        document.querySelector('.turn-message').innerHTML = `<p>Player 4's turn</p>`;
        document.querySelector('.turn-message').innerHTML += `<p></p>`;

        if(gameTurnBlue === 1) {
            if(diceRoll !== 6) {
                document.querySelector('.turn-message').innerHTML = `<p>Player 4's turn</p>`;
                document.querySelector('.turn-message').innerHTML += `<p>Sorry but you're stuck</p>`;
            } else {
                gameTurnBlue++;
                return;
            }
        } else {
            if(diceRoll === 6) {
                positionBlue();
                move_player(3, active_pawn[3], diceRoll);
            } else {
                move_player(3, active_pawn[3], diceRoll);
            }
        }
        turn = 1;
    }
})

const positionGreen = function () {
    g1.addEventListener('click', () => {
        move_player(0, 0, 0);
    })

    g2.addEventListener('click', () => {
        move_player(0, 1, 0);
    })

    g3.addEventListener('click', () => {
        move_player(0, 2, 0);
    })

    g4.addEventListener('click', () => {
        move_player(0, 3, 0);
    })
}

const positionYellow = function() {
    y1.addEventListener('click', () => {
        move_player(1, 0, 0);
    })

    y2.addEventListener('click', () => {
        move_player(1, 1, 0);
    })

    y3.addEventListener('click', () => {
        move_player(1, 2, 0);
    })

    y4.addEventListener('click', () => {
        move_player(1, 3, 0);
    })
}
const positionRed = function() {
    r1.addEventListener('click', () => {
        move_player(3, 0, 0);
    })
    
    r2.addEventListener('click', () => {
        move_player(3, 1, 0);
    })
    
    r3.addEventListener('click', () => {
        move_player(3, 2, 0);
    })
    
    r4.addEventListener('click', () => {
        move_player(3, 3, 0);
    })
}

const positionBlue = function() {
    b1.addEventListener('click', () => {
        move_player(2, 0, 0);
    })

    b2.addEventListener('click', () => {
        move_player(2, 1, 0);
    })

    b3.addEventListener('click', () => {
        move_player(2, 2, 0);
    })

    b4.addEventListener('click', () => {
        move_player(2, 3, 0);
    })
}

const board_element = document.querySelector(".game");

const board = {
    x: board_element.getBoundingClientRect().x,
    y: board_element.getBoundingClientRect().y,
    width: board_element.getBoundingClientRect().width,
    height: board_element.getBoundingClientRect().height,
}

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

const winnerLanes = [
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(5)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(1) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(4)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(5)").getBoundingClientRect(),
    document.querySelector(".left_part > div:nth-child(2) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(5)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(1) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(5)").getBoundingClientRect(),
    document.querySelector(".row_up > div:nth-child(2) > div:nth-child(2) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(4)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(5)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(1) > div:nth-child(6)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(4)").getBoundingClientRect(),
    document.querySelector(".right_part > div:nth-child(2) > div:nth-child(5)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(5)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(1) > div:nth-child(8)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)").getBoundingClientRect(),
    document.querySelector(".row_bottom > div:nth-child(2) > div:nth-child(2) > div:nth-child(5)").getBoundingClientRect(),
];

const board_starts = [42, 3, 16, 29];
const pawn_locations = [
    42, 42, 42, 42,
     3,  3,  3,  3,
    16, 16, 16, 16,
    29, 29, 29, 29,
];

const winner_pos = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
]

const positionElement = function (el, x, y) {
    if (!el.style) return;
    el.style.position = 'absolute';
    el.style.left = x + 5 - board.x + 'px';
    el.style.top =  y + 5 - board.y + 'px';
};

const checkCollision = function(pawn) {
    for (let index = 0; index < pawn_locations.length; ++index) {
        if (Math.floor(index / 4) === Math.floor(pawn / 4)) {
            //console.warn(`Same color => skipping #${index}`);
            index += 3; // skip the rest
        } else {
            //console.warn(`Checking for pawn #${index}`);
            if (pawn_locations[pawn] === pawn_locations[index]) {
                if (pawn_locations[index] !== board_starts[Math.floor(index / 4)]) {
                    console.warn(`found match, setting pawn #${index} (player ${Math.floor(index / 4)} :: ${index % 4}) to loation ${board_starts[Math.floor(index / 4)]}`)
                    pawn_locations[index] = board_starts[Math.floor(index / 4)];

                    let player = Math.floor(index / 4);
                    
                    if (player === 0) {
                        gameTurnGreen--;
                    } else if (player === 1) {
                        gameTurnYellow--;
                    } else if (player === 2) {
                        gameTurnBlue--;
                    } else if (player === 3) {
                        gameTurnRed--;
                    } else {
                        console.error(`Player ${player} out of bounds?!`)
                    }


                    return true;
                }
                else {
                    console.warn(`Cannot collide with a home square`);
                }
            }
        }
    }
}

const winner = function() {
    document.querySelector('.turn-message').innerHTML = `<p>We have a winner!!!</p>`;
    document.querySelector('.turn-message > p').style.color = "#15b02c";

    let audio = new Audio('http://soundfxcenter.com/video-games/super-mario-bros/8d82b5_Super_Mario_Bros_Stage_Clear_Sound_Effect.mp3');
    audio.play();
    playable = false;
}

const move_Winner = function(player, pawn, roll) {
    if (winner_pos[player * 4 + pawn] + roll <= 6) {
        winner_pos[player * 4 + pawn] = winner_pos[player * 4 + pawn] + roll;
        console.warn(`Setting winner pos to ${winner_pos[player * 4 + pawn]}`);
    }
    if (winner_pos[player * 4 + pawn] === 6) {
        if (pawn < 3) {
            active_pawn[player] = active_pawn[player] +1;
            move_player(player, pawn + 1, 0);
        }else {
            winner();
        }
    }
    positionElement(
        pawn_objects[player * 4 + pawn], 
        winnerLanes[player * 5 + pawn].x, 
        winnerLanes[player * 5 + pawn].y);
}

const move_player = function(player, pawn, roll) {

    if (winner_pos[player * 4 + pawn]  ===  0 && pawn_locations[player * 4 + pawn] < board_starts[player] - 2 && pawn_locations[player * 4 + pawn] + roll >= board_starts[player] - 2) {
        
        let stillToMove = pawn_locations[player * 4 + pawn] + roll - board_starts[player];
        pawn_locations[player * 4 + pawn] = board_starts[player] -1;
        console.warn(`${player}:${pawn} rolled ${roll}, Do not move, has to move ${stillToMove}`);

        move_Winner(player, pawn, stillToMove);

        return;
    }
    if (winner_pos[player *4 + pawn] !== 0) {
    
        move_Winner(player, pawn, roll);
        return;
    }

    if (pawn_locations[player * 4 + pawn] + roll > boardLocations.length-2) 
        pawn_locations[player * 4 + pawn] = 0;
    else 
        pawn_locations[player * 4 + pawn] = pawn_locations[player * 4 + pawn] + roll;
    


    //console.log(`Moving player[${player}] '${roll}' spaces, pawn[${pawn}] to [${pawn_locations[player * 4 + pawn]}]`);
    //checkCollision(player * 4 + pawn);

    positionElement(
        pawn_objects[player * 4 + pawn], 
        boardLocations[pawn_locations[player* 4 + pawn]].x, 
        boardLocations[pawn_locations[player* 4 + pawn]].y);
};

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