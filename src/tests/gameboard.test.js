import { gameBoard } from "../modules/gameboard";
// testing gameboard length total

test("Creating gameboard", () => {
  const testBoard = gameBoard();
  expect(testBoard.board.length).toBe(10);
});

// testing gameboard length of row

test("Test gameboard row length", () => {
  const testBoard = gameBoard();
  expect(testBoard.board[0].length).toBe(0);
});

// testing gameboard after created board has been ran
test("Test create board", () => {
  const testBoard = gameBoard();
  expect(testBoard.createBoard().length).toBe(10);
});

// testing gameboard row to make sure it has 10 values, thus having 10x10 board
test("Test create board", () => {
  const testBoard = gameBoard();
  expect(testBoard.createBoard()[9].length).toBe(10);
});

// testing out of bound y Coords
test("Valid / free coordinate?", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.validCoordinate(10, 0)).toBeFalsy();
});

// testing out of bound x Coords
test("Valid / free coordinate?", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.validCoordinate(0, -1)).toBeFalsy();
});

// test ship placement -> select coordinates and whether this coordinate is free
test("Valid / free coordinate?", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.validCoordinate(5, 6)).toBeTruthy();
});

// is coord empty?
test("Valid coordinate - is it empty?", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.coordStatus(0, 0)).toMatch("empty");
});

// coordinate is a miss
test("Valid coordinate - is it a miss?", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  testBoard.board[0][2] = "M";
  expect(testBoard.coordStatus(0, 2)).toMatch("M");
});

// coordinate is a miss
test("Valid coordinate - is it a hit?", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  testBoard.board[0][3] = "X";
  expect(testBoard.coordStatus(0, 3)).toMatch("X");
});

// test placing ship on a board - input ship length, starting coordinate (y, x),
// and horizontal or vertical (0 or 1)
// we need to mock some ships as well right?
test("Placing ship horizontally firt coord", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.placeShip(5, 0, 0, 0)[0][0].hitCount).toBe(0);
});
// horizontal testing continued
test("Placing ship horizontally last coord", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.placeShip(5, 0, 0, 0)[0][4].hitCount).toBe(0);
});
// testing undefined
test("Placing ship horizontally", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.placeShip(5, 0, 0, 0)[0][5].hitCount).toBe(undefined);
});

// vertical testing
test("Placing ship horizontally firt coord", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.placeShip(3, 0, 0, 1)[0][0].hitCount).toBe(0);
});
// vertical testing continued
test("Placing ship horizontally last coord", () => {
  const testBoard = gameBoard();
  testBoard.createBoard();
  expect(testBoard.placeShip(3, 0, 0, 1)[2][0].hitCount).toBe(0);
});

// validate length check in bounds
test('Check if length is valid', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.validateLength(5, 2)).toBeTruthy();
});

// validate length check out of bounds
test('Check if length is valid', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.validateLength(9, 5)).toBeFalsy();
});

//validate empty space array
test('Validate space array should contain empty', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.validateSpace(0, 0, 5, 0)).toContain('empty');
});

//validate containing M
test('Validate space array should contain empty', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    testBoard.board[0][5] = 'M';
    expect(testBoard.validateSpace(0, 5, 3, 0)).toContain('M');
});

// revalidate coordinate status throws an error
test('Revalidate coord status', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    testBoard.board[0][5] = 'M';
    let testArray = testBoard.validateSpace(0, 5, 3, 0);
    expect(testBoard.revalidateCoordinateStatus(testArray)).toBeFalsy();
})

// revalidate coordinate status doesnt throw an error (everything is empty)
test('Revalidate coord status', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    let testArray = testBoard.validateSpace(0, 5, 3, 0);
    expect(testBoard.revalidateCoordinateStatus(testArray)).toBeTruthy();
});


// receiveAttack test - test if the attack is correctly being tracked by a ship
// need to mock a ship on the map!
// receive attack on empty coords should mark map with M
// target that is hit needs to be marked with X on the map, and obj needs hit + 1
// after that need to run a check if the ship has been sunk!
test('Check for marking misses', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.receiveAttack(2, 0)[2][0]).toMatch('M');
});

// miss already recorder -> should throw an error!
test('Check for existing hit being recorded misses', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    testBoard.board[2][0] = 'M';
    expect( () => testBoard.receiveAttack(2, 0)).toThrow(Error);
});

// ship detected marking
test('Ship hit', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    testBoard.placeShip(5, 0, 0, 0);
    expect(testBoard.receiveAttack(0, 2)[0][2]).toMatch('X');
});

// ship sunk, x displayed, message displayed...
test('Ship sunk', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    testBoard.placeShip(1, 0, 0, 0);
    expect(testBoard.receiveAttack(0, 0)[0][0]).toMatch('X');
});

// ship has been sunk

// testing how things are displayed
// test('Display test', () => {
//     const testBoard = gameBoard();
//     testBoard.createBoard();
//     testBoard.placeShip(5, 0, 0, 0);
//     testBoard.placeShip(3, 5, 5, 1);
//     testBoard.placeShip(2, 7, 7, 0);
//     testBoard.placeShip(3, 3, 0, 1);
//     testBoard.placeShip(4, 0, 9, 1);
//     console.table(testBoard.board);
    
//     expect(1).toBe(1);
// });


// placeShip = (shipSize, yCoord, xCoord, direction)