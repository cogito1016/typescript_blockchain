export abstract class Beverage {
  _description: string;

  constructor(description: string) {
    this._description = description;
  }

  get description(): string {
    return this._description;
  }

  abstract cost(): number;
}
