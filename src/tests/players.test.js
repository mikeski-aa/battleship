import { newPlayer } from "../modules/players";

// test that the new object contains everything
test('Player contains player name', () => {
    let testPlayer = newPlayer('Guy', 'player');
    expect(testPlayer.name).toMatch('Guy');
    expect(testPlayer.carrier.length).toBe(5);
    expect(testPlayer.destroyer.length).toBe(2);
});

// test that computer player has been created 
test('Check player type for CPU', () => {
    let testPlayer = newPlayer('Computer', 'CPU');
    expect(testPlayer.type).toMatch('CPU')
});