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
  }

  levelUp() {
    
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");

    this.attack = 25;
    this.defense = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");

    this.attack = 40;
    this.defense = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, "Magicians");

    this.attack = 10;
    this.defense = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, "Undead");

    this.attack = 25;
    this.defense = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");

    this.attack = 40;
    this.defense = 10;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");

    this.attack = 10;
    this.defense = 40;
  }
}

