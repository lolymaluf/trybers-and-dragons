import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  private static _createRacesInstances: 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf._createRacesInstances += 1;
  }

  static createdRacesInstances():number {
    return this._createRacesInstances;
  }
}