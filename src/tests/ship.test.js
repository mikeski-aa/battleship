import { newShip } from "../modules/ship";
// testing cases for ship constructor: length, hit, sunk or not sunk

// Get ship length
test("Ship length", () => {
  const testShip = newShip(5);
  expect(testShip.length).toBe(5);
});

// Get ship hit count
test("Ship hit count", () => {
  const testShip = newShip(5);
  expect(testShip.hitCount).toBe(0);
});

// Change ship hit count - default is zero
test("Ship hit count", () => {
  const testShip = newShip(5);
  testShip.hitCount = 4;
  expect(testShip.hitCount).toBe(4);
});

// Get sunk status - default status is false
test("Sunk status false", () => {
  const testShip = newShip(5);
  expect(testShip.isSunk(0)).toBeFalsy();
});

// check if ship has been sunk
test("Sunk status true", () => {
  const testShip = newShip(5);
  testShip.hitCount = 6;
  expect(testShip.isSunk(testShip.hitCount)).toBeTruthy();
});

