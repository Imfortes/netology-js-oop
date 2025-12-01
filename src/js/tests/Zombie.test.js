import { Zombie } from '../classes/Zombie.js';

describe('Zombie', () => {
  test('should create with valid name and type', () => {
    const zombie = new Zombie('Zom');

    const correct = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Zom',
      type: 'Zombie',
    }

    expect(zombie).toEqual(correct);
  });

  test('should level up correctly', () => {
    const zombie = new Zombie('Zom');
    zombie.levelUp();
    expect(zombie.level).toBe(2);
    expect(zombie.health).toBe(100);
    expect(zombie.attack).toBeCloseTo(48);
    expect(zombie.defence).toBeCloseTo(12);
  });

  test('should take damage correctly', () => {
    const zombie = new Zombie('Zom');
    zombie.damage(15);
    expect(zombie.health).toBeCloseTo(86.5);
  });
});
