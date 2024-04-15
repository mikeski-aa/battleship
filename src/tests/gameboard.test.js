import { gameBoard } from "../modules/gameboard";
import { newShip } from "../modules/ship";
// testing gameboard length total 

test('Creating gameboard', () => {
    const testBoard = gameBoard();
    expect(testBoard.board.length).toBe(10);
});

// testing gameboard length of row

test('Test gameboard row length', () => {
    const testBoard = gameBoard();
    expect(testBoard.board[0].length).toBe(0);
});


// testing gameboard after created board has been ran
test('Test create board', () => {
    const testBoard = gameBoard();
    expect(testBoard.createBoard().length).toBe(10);
});

// testing gameboard row to make sure it has 10 values, thus having 10x10 board
test('Test create board', () => {
    const testBoard = gameBoard();
    expect(testBoard.createBoard()[9].length).toBe(10);
});


// testing out of bound y Coords
test('Valid / free coordinate?', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.validCoordinate(10, 0)).toBeFalsy();
});

// testing out of bound x Coords
test('Valid / free coordinate?', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.validCoordinate(0, -1)).toBeFalsy();
});

// test ship placement -> select coordinates and whether this coordinate is free
test('Valid / free coordinate?', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.validCoordinate(5, 6)).toBeTruthy();
});

// is coord empty?
test('Valid coordinate - is it empty?', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    expect(testBoard.coordStatus(0,0)).toMatch('empty');
});

// coordinate is a miss
test('Valid coordinate - is it a miss?', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    testBoard.board[0][2] = 'M'
    expect(testBoard.coordStatus(0,2)).toMatch('M');
});

// coordinate is a miss
test('Valid coordinate - is it a hit?', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    testBoard.board[0][3] = 'X'
    expect(testBoard.coordStatus(0,3)).toMatch('X');
});

// test placing ship on a board - input ship length, starting coordinate (y, x), 
// and horizontal or vertical (0 or 1)
// we need to mock some ships as well right?
test ('Placing ship horizontally firt coord', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    let testCarrier = newShip(5);
    expect(testBoard.placeShip(testCarrier, 0, 0, 0)[0][0].hitCount).toBe(0);
});
// horizontal testing continued
test ('Placing ship horizontally last coord', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    let testCarrier = newShip(5);
    expect(testBoard.placeShip(testCarrier, 0, 0, 0)[0][4].hitCount).toBe(0);
});
// testing undefined 
test ('Placing ship horizontally', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    let testCarrier = newShip(5);
    expect(testBoard.placeShip(testCarrier, 0, 0, 0)[0][5].hitCount).toBe(undefined);
});

// vertical testing
test ('Placing ship horizontally firt coord', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    let testCruiser = newShip(3);
    expect(testBoard.placeShip(testCruiser, 0, 0, 1)[0][0].hitCount).toBe(0);
});
// vertical testing continued
test ('Placing ship horizontally last coord', () => {
    const testBoard = gameBoard();
    testBoard.createBoard();
    let testCruiser = newShip(3);
    expect(testBoard.placeShip(testCruiser, 0, 0, 1)[2][0].hitCount).toBe(0);
});