import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static createRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Halfling.createRacesInstances += 1;
  }

  get maxLifePoints():number { return this._maxLifePoints; }

  static createdRacesInstances():number {
    return this.createRacesInstances;
  }
}