import { Undead } from '../classes/Undead.js';

describe('Undead', () => {
  test('should create with valid name and type', () => {
    const undead = new Undead('ZombieKing');

    const correct = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'ZombieKing',
      type: 'Undead',
    }

    expect(undead).toEqual(correct);
  });

  test('should level up correctly', () => {
    const undead = new Undead('ZombieKing');
    undead.levelUp();
    expect(undead.level).toBe(2);
    expect(undead.health).toBe(100);
    expect(undead.attack).toBeCloseTo(30);
    expect(undead.defence).toBeCloseTo(30);
  });

  test('should take damage correctly', () => {
    const undead = new Undead('ZombieKing');
    undead.damage(20);
    expect(undead.health).toBeCloseTo(85);
  });
});
