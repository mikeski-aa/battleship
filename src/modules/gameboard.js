import { newShip } from "./ship";

// create gameboard to track ship position and misses
// gameboard coordinates are Y -> X. We select rows first before columns ALWAYS!!!

const gameBoard = () => {
  let board = [[], [], [], [], [], [], [], [], [], []];

  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board[i].push("empty");
      }
    }
    return board;
  };
  // check if coordinates are even on the board
  const validCoordinate = (yCoord, xCoord) => {
    if (yCoord > 9 || yCoord < 0 || xCoord > 9 || xCoord < 0) {
      return false;
    } else {
      return true;
    }
  };

  // check if proposed length is within bounds
  const validateLength = (startCoord, length) => {
    if (startCoord + length > 9) {
      return false;
    } else {
      return true;
    }
  };

  // get the coordinate status
  const coordStatus = (yCoord, xCoord) => {
    return board[yCoord][xCoord];
  };

  const validateSpace = (yCoord, xCoord, length, direction) => {
    let tempArray = [];

    // horizontal
    if (direction == 0 && validateLength(xCoord, length)) {
      for (let i = xCoord; i !== xCoord + length; i++) {
        tempArray.push(board[yCoord][i]);
      }
      // console.log(tempArray);
      return tempArray;
      // vertical
    } else if (direction == 1 && validateLength(yCoord, length)) {
      for (let i = yCoord; i !== yCoord + length; i++) {
        tempArray.push(board[i][xCoord]);
      }
      return tempArray;
    } else {
      throw new Error("Something went wrong");
    }
  };

  const revalidateCoordinateStatus = (proposedCoords) => {
    let isEmpty = true;
    for (let i = 0; i < proposedCoords.length; i++) {
      if (proposedCoords[0] !== "empty") {
        return (isEmpty = false);
      } else {
        isEmpty = true;
      }
    }

    return isEmpty;
  };

  // check if all of the validation conditions are met!
  // this is an incredibly ugly function but should check everything
  const compoundValidation = (shipSize, yCoord, xCoord, direction) => {
    if (validCoordinate(yCoord, xCoord)) {
      // check horizontally
      if (direction === 0) {
        if (validateLength(xCoord, shipSize)) {
          let tempSpace = validateSpace(yCoord, xCoord, shipSize, direction);
          if (revalidateCoordinateStatus(tempSpace)) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
        // check vertically
      } else if (direction === 1) {
        if (validateLength(yCoord, shipSize)) {
          let tempSpace = validateSpace(yCoord, xCoord, shipSize, direction);
          if (revalidateCoordinateStatus(tempSpace)) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };

  const placeShip = (shipSize, yCoord, xCoord, direction) => {
    if (compoundValidation(shipSize, yCoord, xCoord, direction)) {
      let ship = newShip(shipSize);
      if (direction === 0) {
        for (let i = 0; i < ship.length; i++) {
          board[yCoord][xCoord + i] = ship;
        }
        // console.table(board);
        // console.log(board[0][0])
        return board;
      } else {
        for (let i = 0; i < ship.length; i++) {
          board[yCoord + i][xCoord] = ship;
        }
        // console.table(board);
        // console.log(board[0][0])
        return board;
      }
    } else {
      throw new Error("Error, invalid placement!");
    }
  };

  // receive attack on empty coords should mark map with M
  // target that is hit needs to be marked with X on the map, and obj needs hit + 1
  // after that need to run a check if the ship has been sunk!

  const receiveAttack = (yCoord, xCoord) => {
    if (coordStatus(yCoord, xCoord) == "empty") {
        board[yCoord][xCoord] = 'M';
        return board;
    } else if (coordStatus(yCoord, xCoord) == ("M" || 'X')) {
        console.log('move invalid');
        throw new Error('This coordinate is already occupied!')
    } else {
        board[yCoord][xCoord].hitCount += 1;

        if (board[yCoord][xCoord].isSunk(board[yCoord][xCoord].hitCount)) {
            console.log('Ship has been sunk!');
        }

        board[yCoord][xCoord] = 'X';
        return board;
    }
  };



  return {
    receiveAttack,
    revalidateCoordinateStatus,
    validateSpace,
    validateLength,
    coordStatus,
    placeShip,
    validCoordinate,
    createBoard,
    board,
  };
};

export { gameBoard };
