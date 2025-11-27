import { Bowman } from '../classes/Bowman.js';

describe('Bowman', () => {
  test('should create with valid name and type', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('should throw error for invalid name', () => {
    expect(() => new Bowman('A')).toThrow('Name must be a string, min - 2 символа, max - 10');
  });

  test('should level up correctly', () => {
    const bowman = new Bowman('Legolas');
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.health).toBe(100);
    expect(bowman.attack).toBeCloseTo(30);
    expect(bowman.defence).toBeCloseTo(30);
  });

  test('should not level up if dead', () => {
    const bowman = new Bowman('Legolas');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow('Level Up нельзя сделать у умершего героя');
  });

  test('should take damage correctly', () => {
    const bowman = new Bowman('Legolas');
    bowman.damage(10);
    expect(bowman.health).toBeCloseTo(92.5);
  });
});
