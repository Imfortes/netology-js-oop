import { Daemon } from '../classes/Daemon.js';

describe('Daemon', () => {
  test('should create with valid name and type', () => {
    const daemon = new Daemon('Doom');
    expect(daemon.name).toBe('Doom');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
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
