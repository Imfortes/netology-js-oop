import { Daemon } from '../classes/Daemon.js';

describe('Daemon', () => {
  test('should create with valid name and type', () => {
    const daemon = new Daemon('Doom');

    const correct = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Doom',
      type: 'Daemon',
    }

    expect(daemon).toEqual(correct);
  });

  test('should level up correctly', () => {
    const daemon = new Daemon('Doom');
    daemon.levelUp();
    expect(daemon.level).toBe(2);
    expect(daemon.health).toBe(100);
    expect(daemon.attack).toBeCloseTo(12);
    expect(daemon.defence).toBeCloseTo(48);
  });

  test('should take damage correctly', () => {
    const daemon = new Daemon('Doom');
    daemon.damage(20);
    expect(daemon.health).toBeCloseTo(88);
  });
});
