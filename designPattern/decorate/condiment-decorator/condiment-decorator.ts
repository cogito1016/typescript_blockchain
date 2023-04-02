import { Beverage } from '../beverage/beverage';

export abstract class CondimentDecorator {
  _beverage: Beverage;

  constructor(beverage: Beverage) {
    this._beverage = beverage;
  }

  get description(): string {
    return this._beverage.description;
  }

  get cost(): number {
    return this._beverage.cost();
  }
}
