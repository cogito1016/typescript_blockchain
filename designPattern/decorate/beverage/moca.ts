import { Beverage } from './beverage';

export class Moca extends Beverage {
  constructor() {
    super();
    this._description = 'moca';
  }

  cost(): number {
    return 800;
  }
}
