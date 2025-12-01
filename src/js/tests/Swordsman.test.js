import { Swordsman } from '../classes/Swordsman.js';

describe('Swordsman', () => {
  test('should create with valid name and type', () => {
    const swordsman = new Swordsman('Aragorn');

    const correct = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Aragorn',
      type: 'Swordsman',
    }

    expect(swordsman).toEqual(correct);
  });

  test('should level up correctly', () => {
    const swordsman = new Swordsman('Aragorn');
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
    expect(swordsman.health).toBe(100);
    expect(swordsman.attack).toBeCloseTo(48);
    expect(swordsman.defence).toBeCloseTo(12);
  });

  test('should take damage correctly', () => {
    const swordsman = new Swordsman('Aragorn');
    swordsman.damage(25);
    expect(swordsman.health).toBeCloseTo(77.5);
  });
});
