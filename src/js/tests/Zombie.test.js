import { Zombie } from '../classes/Zombie.js';

describe('Zombie', () => {
  test('should create with valid name and type', () => {
    const zombie = new Zombie('Zom');
    expect(zombie.name).toBe('Zom');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
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
