import { gameBoard } from "./gameboard";
import {
  newPlayer,
  genXCoord,
  genYCoord,
  genDirection,
  insertShipRandomCoords,
} from "./players";
import { drawBoard, drawCPU } from "./dom";

const startGame = () => {
  let cpuPlayer = newPlayer("computer", "CPU");
  let player1 = newPlayer("Player1", "player");
  let p1Count = 0;
  let p2Count = 0;

  const gameStartCondition = () => {
    initializePlayer();
    initializeCPU();
  };
  // testing for player 1

  const initializePlayer = () => {
    player1.playerBoard.createBoard();
    insertShipRandomCoords(player1.carrier, player1.playerBoard);
    insertShipRandomCoords(player1.battleship, player1.playerBoard);
    insertShipRandomCoords(player1.submarine, player1.playerBoard);
    insertShipRandomCoords(player1.cruiser, player1.playerBoard);
    insertShipRandomCoords(player1.destroyer, player1.playerBoard);
    drawBoard(player1.playerBoard.board, 1);

  };

  // This is how the game will always start if the player wants to play CPU.

  const initializeCPU = () => {
    cpuPlayer.playerBoard.createBoard();

    insertShipRandomCoords(cpuPlayer.carrier, cpuPlayer.playerBoard);
    insertShipRandomCoords(cpuPlayer.battleship, cpuPlayer.playerBoard);
    insertShipRandomCoords(cpuPlayer.submarine, cpuPlayer.playerBoard);
    insertShipRandomCoords(cpuPlayer.cruiser, cpuPlayer.playerBoard);
    insertShipRandomCoords(cpuPlayer.destroyer, cpuPlayer.playerBoard);

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

        if (gameOver(cpuPlayer) == true) {
          return alert(`Game over ${player1.name} wins`);
        } else {
          return cpuTurn();
        }
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

        if (gameOver(player1) == true) {
          return alert(`Game over ${cpuPlayer.name} wins`);
        } else {
          return drawBoard(player1.playerBoard.board, 1);
        }
      } else if (p2Count == 100) {
        return alert("Max moves reached by CPU");
      }
    }
  };

  const gameOver = (inputPlayer) => {
    let totalHP =
      inputPlayer.carrier.hitCount +
      inputPlayer.battleship.hitCount +
      inputPlayer.cruiser.hitCount +
      inputPlayer.submarine.hitCount +
      inputPlayer.destroyer.hitCount;

    if (totalHP < 17) {
      return false;
    } else {
      return true;
    }
  };

  const resetGame = () => {
    initializePlayer();
    initializeCPU();
  };

  //place ship by clicking on board
  const placeShip = () => {
   
  };

  return {
    placeShip,
    gameOver,
    gameStartCondition,
    initializePlayer,
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
