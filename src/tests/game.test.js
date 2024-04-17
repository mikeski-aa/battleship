import { startGame } from "../modules/game";
import { newPlayer } from "../modules/players";

// test whether game is over
test('game over condition true', () => {
    const testPlayer = newPlayer('Test', 'player');
    testPlayer.carrier.hitCount = 5;
    testPlayer.battleship.hitCount = 4;
    testPlayer.cruiser.hitCount = 3;
    testPlayer.submarine.hitCount = 3;
    testPlayer.destroyer.hitCount = 2;
    expect(startGame().gameOver(testPlayer)).toBeTruthy();
});

// test whether game is not over
test('game over condition false', () => {
    const testPlayer = newPlayer('Test', 'player');
    expect(startGame().gameOver(testPlayer)).toBeFalsy();
});