import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createRacesInstances: 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createRacesInstances += 1;
  }

  static createdRacesInstances():number {
    return this._createRacesInstances;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
}