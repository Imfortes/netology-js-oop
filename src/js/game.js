import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from './domain.js';

class Game {
  start() {
    console.log('game started');

    const bowman = new Bowman('Legolas');
    console.log(bowman);
    // Character { name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 }

    const zombie = new Zombie('Zom');
    console.log(zombie);
    // Character { name: 'Zom', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 }

    zombie.levelUp();
    zombie.levelUp();
    zombie.levelUp();
    console.log(zombie)

    // Ошибки:
    new Swordsman('A');        // Error: Name too short
    new Magician('VeryLongName123'); // Error: Name too long
    new Character('Bob', 'Warrior'); // Error: Invalid type
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
