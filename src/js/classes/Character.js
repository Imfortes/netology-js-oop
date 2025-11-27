export class Character {
  constructor(name, type) {

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string, min - 2 символа, max - 10');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid type '${type}'`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (!this.health > 0) {
      throw new Error('Level Up нельзя сделать у умершего героя');
    } else {
      this.level += 1
      this.attack = Number((this.attack * 1.2).toFixed(2))
      this.defence = Number((this.defence * 1.2).toFixed(2))
      this.health = 100
    }
  }

  damage(points) {
    if (!this.health > 0) {
      throw new Error('Персонаж мертв')
    } else {
      this.health -= points * (1 - this.defence / 100)
    }
  }
}
