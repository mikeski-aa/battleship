import { gameBoard } from "./modules/gameboard";
import { newPlayer, genXCoord, genYCoord, genDirection, insertCPUship } from "./modules/players";
import { drawBoard } from "./modules/dom";


// This is how the game will always start if the player wants to play CPU.
function initializeCPU(){
    let cpuPlayer = newPlayer('computer', 'CPU');
    cpuPlayer.playerBoard.createBoard();
    
    insertCPUship(cpuPlayer.carrier, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.battleship, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.submarine, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.cruiser, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.destroyer, cpuPlayer.playerBoard);
    
    
    drawBoard(cpuPlayer.playerBoard.board, 2);
}



let player1 = newPlayer('Mike', 'player');
player1.playerBoard.createBoard();

player1.playerBoard.placeShip(player1.carrier, 5, 4, 0);

player1.playerBoard.placeShip(player1.battleship, 0, 0, 1);

player1.playerBoard.placeShip(player1.cruiser, 7, 2, 0);

player1.playerBoard.placeShip(player1.destroyer, 3, 8, 0);

// player1.playerBoard.receiveAttack(4, 3);

// player1.playerBoard.receiveAttack(4, 5);

// player1.playerBoard.receiveAttack(0, 0);

// player1.playerBoard.receiveAttack(1, 0);

// player1.playerBoard.receiveAttack(2, 0);

// player1.playerBoard.receiveAttack(3, 0);

// player1.playerBoard.receiveAttack(3, 0);


console.table(player1.playerBoard.board);
drawBoard(player1.playerBoard.board, 1);

console.log(player1.battleship);