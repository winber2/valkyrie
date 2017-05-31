import MovingObject from './moving_object';
import { EnemyShip } from './enemy';

export class PinkAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/pinkAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.ship = this.game.ship.ship;
  }

  move() {
    switch (this.moveType) {
      case 'linear':
        return this.linearMove(60);

      case 'linear offset':
        return this.linearMoveWithOffset();
    }
  }

  attack() {
    switch (this.attackType) {
      case 'circle':
        return this.circleAttack();

      case 'single':
        return this.singleAttack();
    }
  }
}

export class BlueAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/blueAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.ship = this.game.ship.ship;
  }

  move() {
    switch (this.moveType) {
      case 'linear':
        return this.linearMove(60);

      case 2:
        console.log('asdf');
        break;
    }
  }

  attack() {
    switch (this.attackType) {
      case 'shotgun':
        return this.shotgunAttack();

    }
  }
}

export class GreenAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/greenAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.isTweening = false;
  }

  move() {
    switch (this.moveType) {
      case 'ease':
        return this.easeTo(300, 150, 300);

      case 2:
        console.log('asdf');
        break;
    }
  }

  attack() {
    switch (this.attackType) {
      case 'spiral':
        return this.spiralAttack();

    }
  }
}