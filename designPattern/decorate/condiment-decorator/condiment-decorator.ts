import { Beverage } from '../beverage/beverage';

export abstract class CondimentDecorator extends Beverage {
  //@ts-ignore
  _beverage: Beverage;
  abstract get description(): string;
}
