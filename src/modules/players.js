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
        destroyer
    }
};

export { newPlayer };