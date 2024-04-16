// factory function for creating a new ship

const newShip = (size) => {
  const length = size;
  let hitCount = 0;

  const isSunk = (currHits) => {
    if (currHits >= length) {
        return true;
    } else {
        return false;
    }
  };



  return {
    length,
    hitCount,
    isSunk,
  };
};

export { newShip };
