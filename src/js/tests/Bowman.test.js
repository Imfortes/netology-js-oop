import { Bowman } from '../classes/Bowman.js';

describe('Bowman', () => {
  test('should create with valid name and type', () => {
    const bowman = new Bowman('Legolas');

    const correct = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Legolas',
      type: 'Bowman',
    }
    expect(bowman).toEqual(correct);
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
