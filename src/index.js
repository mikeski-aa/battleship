import "./style.css";
import { gameBoard } from "./modules/gameboard";
import { newPlayer, genXCoord, genYCoord, genDirection, insertCPUship } from "./modules/players";
import { drawBoard } from "./modules/dom";



let cpuPlayer = newPlayer('computer', 'CPU');
cpuPlayer.playerBoard.createBoard();

insertCPUship(cpuPlayer.carrier, cpuPlayer.playerBoard);
insertCPUship(cpuPlayer.battleship, cpuPlayer.playerBoard);
insertCPUship(cpuPlayer.submarine, cpuPlayer.playerBoard);
insertCPUship(cpuPlayer.cruiser, cpuPlayer.playerBoard);
insertCPUship(cpuPlayer.destroyer, cpuPlayer.playerBoard);
// compoundValidation = (shipSize, yCoord, xCoord, direction)

// console.log(cpuPlayer.playerBoard.compoundValidation(5, -1, 1, 1))

// if (cpuPlayer.playerBoard.placeShip(cpuPlayer.carrier, genYCoord(), genXCoord(), genDirection()) == false){
//     console.log('fail');
// } else {
//     console.log('no fail');
// }





drawBoard(cpuPlayer.playerBoard.board);
// let player1 = newPlayer('Mike', 'player');
// player1.playerBoard.createBoard();

// player1.playerBoard.placeShip(player1.carrier, 5, 4, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.placeShip(player1.battleship, 0, 0, 1);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.placeShip(player1.cruiser, 7, 2, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.placeShip(player1.destroyer, 3, 8, 0);

// player1.playerBoard.receiveAttack(4, 3);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(4, 5);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(0, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(1, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(2, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(3, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(3, 0);
// drawBoard(player1.playerBoard.board);

// console.table(player1.playerBoard.board);
// drawBoard(player1.playerBoard.board);

// console.log(player1.battleship);