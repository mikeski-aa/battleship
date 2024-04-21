import "./style.css";
import { gameBoard } from "./modules/gameboard";
import { newPlayer, genXCoord, genYCoord, genDirection, insertCPUship } from "./modules/players";
import { drawBoard } from "./modules/dom";
import { startGame, player2BoardClick, player2board } from "./modules/game";

// startGame().gameStartCondition();

// let playCPU = document.querySelector('.playCPU');
// playCPU.addEventListener('click', (e) => {
//     startGame().gameStartCondition();
//     playCPU.removeEventListener('click', e);
// });


let test = startGame();
test.player1.playerBoard.createBoard();
// test.initializePlayer();
// test.placeShip();

let testBtn = document.querySelector('.placeP1Ship');
testBtn.addEventListener('click', () => {
    test.placeShip();
})