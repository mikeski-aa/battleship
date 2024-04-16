import { gameBoard } from "./gameboard";
import { newShip } from "./ship";
// new players will be created here

const newPlayer = (inputPlayerName, playerType) => {
  const name = inputPlayerName;
  const type = playerType;
  let playerBoard = gameBoard();
  let carrier = newShip(5);
  let battleship = newShip(4);
  let cruiser = newShip(3);
  let submarine = newShip(3);
  let destroyer = newShip(2);

  return {
    type,
    name,
    playerBoard,
    carrier,
    battleship,
    cruiser,
    submarine,
    destroyer,
  };
};

function genXCoord() {
  let x = Math.floor(Math.random() * 10);

  return x;
}

function genYCoord() {
  let y = Math.floor(Math.random() * 10);
  return y;
}

function genDirection() {
  let direction = Math.floor(Math.random() * 2);
  return direction;
}
// compoundValidation = (shipSize, yCoord, xCoord, direction)
function insertCPUship(ship, cpuPlayerObj) {
  while (true) {
    let xCoord = genXCoord();
    let yCoord = genYCoord();
    let direction = genDirection();

    if (
      cpuPlayerObj.compoundValidation(ship.length, yCoord, xCoord, direction) !=
      false
    ) {
      return cpuPlayerObj.placeShip(ship, yCoord, xCoord, direction);
    }
  }
}
export { genDirection, newPlayer, genXCoord, genYCoord, insertCPUship };
