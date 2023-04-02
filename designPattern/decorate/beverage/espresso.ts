import { Beverage } from './beverage';

export class Espresso extends Beverage {
  constructor(description: string) {
    super(description);
  }

  cost(): number {
    return 500;
  }
}
