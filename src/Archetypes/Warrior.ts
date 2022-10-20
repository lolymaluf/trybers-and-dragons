import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetypes {
  _energyType : EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string/* , special: number, cost : number */) {
    super(name /* special, cost */);
    this._energyType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._createdArchetypeInstances;
  }
}