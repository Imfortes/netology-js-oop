import {Character, Bowman, Daemon, Swordsman} from '../src/js/domain'

describe('Character', () => {
  test('Valid name and type', async () => {
    const char = new Bowman('BBB')
    expect(char.name).toBe('BBB')
    expect(char.type).toBe('Bowman')
    expect(char.health).toBe(100)
  })

  test('Valid stats', async () => {
    expect(new Daemon('DDD').attack).toBe(10)
  })

  test('Valid lvlUp', async () => {
    const char = new Bowman('BBB')
    char.levelUp()

    expect(char.level).toBe(2)
    expect(char.health).toBe(100)
    expect(char.attack).toBe(30)
    expect(char.defence).toBe(36)
  })

  test('Valid damage', async () => {
    const char = new Bowman('BBB')
    char.levelUp()
    char.damage(100)

    expect(char.health).toBe(36)
  })

  test('Valid damage', async () => {
    const char = new Swordsman('SSS')
    char.levelUp()
    char.damage(100)
    char.levelUp()

    expect(char.health).toBe(100)
  })
})
