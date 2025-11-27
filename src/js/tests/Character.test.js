import {Character} from '../classes/Character'

describe('Character', () => {
  test('Valid name and type', async () => {
    const char = new Character('BBB', 'Bowman')
    expect(char.name).toBe('BBB')
    expect(char.type).toBe('Bowman')
    expect(char.health).toBe(100)
  })

  test('Valid hero stats', async () => {
    const char = new Character('BBB', 'Bowman')
    const correctStats = {
      attack: undefined,
      defence: undefined,
      health: 100,
      level: 1,
      name: 'BBB',
      type: 'Bowman'
    }

    expect(char).toEqual(correctStats)
  })
})
