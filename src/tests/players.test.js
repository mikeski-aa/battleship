import { newPlayer } from "../modules/players";

// test that the new object contains everything
test('Player contains player name', () => {
    let testPlayer = newPlayer('Guy');
    expect(testPlayer.name).toMatch('Guy');
})