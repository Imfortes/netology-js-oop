class Character {
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

    switch (type) {
      case 'Bowman':
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        throw new Error('Неизвестный тип персонажа');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1
      this.attack = Number(this.attack * 1.2).toFixed(2)
      this.defence = Number(this.attack * 1.2).toFixed(2)
      this.health = 100
    } else {
      throw new Error('Level Up нельзя сделать у умершего героя');
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, "Magicians");
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
  }
}

