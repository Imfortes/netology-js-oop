import { Magician } from '../classes/Magician.js';

describe('Magician', () => {
  test('should create with valid name and type', () => {
    const mag = new Magician('Gandalf');

    const correct = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Gandalf',
      type: 'Magician',
    }

    expect(mag).toEqual(correct);
  });

  test('should level up correctly', () => {
    const mag = new Magician('Gandalf');
    mag.levelUp();
    expect(mag.level).toBe(2);
    expect(mag.health).toBe(100);
    expect(mag.attack).toBeCloseTo(12);
    expect(mag.defence).toBeCloseTo(48);
  });

  test('should take damage correctly', () => {
    const mag = new Magician('Gandalf');
    mag.damage(30);
    expect(mag.health).toBeCloseTo(82);
  });
});
