import { Swordsman } from '../classes/Swordsman.js';

describe('Swordsman', () => {
  test('should create with valid name and type', () => {
    const swordsman = new Swordsman('Aragorn');
    expect(swordsman.name).toBe('Aragorn');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
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
