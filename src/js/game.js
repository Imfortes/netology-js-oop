import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from './domain.js';

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
