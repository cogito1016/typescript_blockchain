import { Beverage } from '../beverage/beverage';
import { CondimentDecorator } from './condiment-decorator';

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  get description(): string {
    return 'I am milk';
  }

  get cost(): number {
    return this._beverage.cost() + 1100;
  }
}
