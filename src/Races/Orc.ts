import Race from './Race';

export default class Orc extends Race {
  maxLifePoints: number;
  private static _createRacesInstances: 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc._createRacesInstances += 1;
  }

  static createdRacesInstances():number {
    return this._createRacesInstances;
  }
}