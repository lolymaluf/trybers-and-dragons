import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string, race?: Race, archetype?: Archetype) {
    this._name = name;

    this._dexterity = getRandomInt(1, 10);

    this._race = race || new Elf(name, this._dexterity);

    this._archetype = archetype || new Mage(name);

    this._maxLifePoints = this._race.maxLifePoints / 2;

    this._lifePoints = this._maxLifePoints;

    this._strength = getRandomInt(1, 10);

    this._defense = getRandomInt(1, 10);

    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get defense(): number {
    return this._defense;
  }

  get strength(): number {
    return this._strength;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get name(): string {
    return this._name;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  special(enemy: Fighter): void {
    this._defense += 10000000;
    this.attack(enemy);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
      if (this._lifePoints <= 0) this._lifePoints = -1;
    }
    return this.lifePoints;
  }
}