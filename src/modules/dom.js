// we do dom stuff here

const domManipulation = () => {
  const drawBoard = (currBoard) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] != ("empty" || "M" || "X")) {
          cell = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);
          cell.classList.add("ship");
        }
      }
    }
  };
  return {
    drawBoard,
  };
};

function drawBoard(currBoard, playerNum) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.querySelector(`[class*="player${playerNum}"][data-x="${j}"][data-y="${i}"]`);

      if (currBoard[i][j] == "M") {
        cell.classList.add("miss");
      } 
      else if (currBoard[i][j] == ("X")) {
        cell.classList.add("targetHit");
      }
      else if (currBoard[i][j] != ("empty" || "M" || "X")) {
        cell.classList.add("ship");
      }
    }
  }
}

export { drawBoard };
