import { Undead } from '../classes/Undead.js';

describe('Undead', () => {
  test('should create with valid name and type', () => {
    const undead = new Undead('ZombieKing');
    expect(undead.name).toBe('ZombieKing');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
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
