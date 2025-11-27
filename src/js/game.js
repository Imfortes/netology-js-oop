// import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from './domain.js';
// import Character from './classes/Character'

import {Bowman} from './classes/Bowman'
import {Daemon} from './classes/Daemon'
import {Magician} from './classes/Magician'
import {Swordsman} from './classes/Swordsman'
import {Undead} from './classes/Undead'
import {Zombie} from './classes/Zombie'

class Game {
  start() {
    console.log('game started');

    const bowman = new Bowman('Legolas');
    console.log(bowman);
    bowman.levelUp()
    console.log(bowman);

    bowman.damage(100)
    console.log(bowman);

    const zombie = new Zombie('Zom');
    console.log(zombie);

    zombie.levelUp();
    zombie.levelUp();
    zombie.levelUp();
    console.log(zombie)

    const swordsman = new Swordsman('Alex');
    const magician = new Magician('FireMage');
    const deamon = new Daemon('Azazel');
    const undead = new Daemon('Undead');

    console.log(swordsman)
    console.log(magician)
    console.log(deamon)
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
