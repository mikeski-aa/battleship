import { gameBoard } from "./gameboard";
import {
  newPlayer,
  genXCoord,
  genYCoord,
  genDirection,
  insertCPUship,
} from "./players";
import { drawBoard, drawCPU } from "./dom";

const startGame = () => {
let p1Count = 0;
let p2Count = 0;
    // testing for player 1
  let player1 = newPlayer("Mike", "player");
  player1.playerBoard.createBoard();
  player1.playerBoard.placeShip(player1.carrier, 5, 4, 0);
  player1.playerBoard.placeShip(player1.battleship, 0, 0, 1);
  player1.playerBoard.placeShip(player1.cruiser, 7, 2, 0);
  player1.playerBoard.placeShip(player1.destroyer, 3, 8, 0);
  drawBoard(player1.playerBoard.board, 1);
  // This is how the game will always start if the player wants to play CPU.
  let cpuPlayer = newPlayer("computer", "CPU");

  const initializeCPU = () => {
    cpuPlayer.playerBoard.createBoard();

    insertCPUship(cpuPlayer.carrier, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.battleship, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.submarine, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.cruiser, cpuPlayer.playerBoard);
    insertCPUship(cpuPlayer.destroyer, cpuPlayer.playerBoard);

    drawCPU(cpuPlayer.playerBoard.board, 2);

    player2BoardClick(cpuPlayer);
  };

  const player2BoardClick = () => {
    let p2board = document.querySelector(".p2board");
    p2board.addEventListener("click", (event) => {
      let xCoord = event.target.dataset.x;
      let yCoord = event.target.dataset.y;
      console.log([xCoord, yCoord]);

      if (xCoord != undefined && yCoord != undefined) {
        console.log("clickable tile");
        cpuPlayer.playerBoard.receiveAttack(yCoord, xCoord);
        drawCPU(cpuPlayer.playerBoard.board, 2);
        p1Count += 1;
        console.log(p1Count);
        return cpuTurn();
      }

      return [xCoord, yCoord];
    });
  };

  const cpuTurn = () => {
    while (true) {
      let xCoord = genXCoord();
      let yCoord = genYCoord();

      if (
        player1.playerBoard.board[yCoord][xCoord] != "X" &&
        player1.playerBoard.board[yCoord][xCoord] != "M"
      ) {
        player1.playerBoard.receiveAttack(yCoord, xCoord);
        p2Count += 1;
        console.log(p2Count);
        return drawBoard(player1.playerBoard.board, 1);
      } else if (p2Count == 100);
    }
  };

  return {
    player2BoardClick,
    initializeCPU,
    cpuPlayer,
  };
};

// let player1 = newPlayer("Mike", "player");
// player1.playerBoard.createBoard();

// player1.playerBoard.placeShip(player1.carrier, 5, 4, 0);

// player1.playerBoard.placeShip(player1.battleship, 0, 0, 1);

// player1.playerBoard.placeShip(player1.cruiser, 7, 2, 0);

// player1.playerBoard.placeShip(player1.destroyer, 3, 8, 0);

// // player1.playerBoard.receiveAttack(4, 3);

// // player1.playerBoard.receiveAttack(4, 5);

// // player1.playerBoard.receiveAttack(0, 0);

// // player1.playerBoard.receiveAttack(1, 0);

// // player1.playerBoard.receiveAttack(2, 0);

// // player1.playerBoard.receiveAttack(3, 0);

// // player1.playerBoard.receiveAttack(3, 0);

// console.table(player1.playerBoard.board);
// drawBoard(player1.playerBoard.board, 1);

// console.log(player1.battleship);

export { startGame };
