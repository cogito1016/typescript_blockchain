import { Beverage } from '../beverage/beverage';
import { CondimentDecorator } from './condiment-decorator';

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
  }

  get description(): string {
    return this._beverage.description + '+ whip';
  }

  cost(): number {
    return this._beverage.cost() + 300;
  }
}
