import { Magician } from '../classes/Magician.js';

describe('Magician', () => {
  test('should create with valid name and type', () => {
    const mag = new Magician('Gandalf');
    expect(mag.name).toBe('Gandalf');
    expect(mag.type).toBe('Magician');
    expect(mag.health).toBe(100);
    expect(mag.level).toBe(1);
    expect(mag.attack).toBe(10);
    expect(mag.defence).toBe(40);
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
