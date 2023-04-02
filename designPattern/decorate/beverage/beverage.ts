export abstract class Beverage {
  _description: string = '메뉴이름';

  get description(): string {
    return this._description;
  }

  abstract cost(): number;
}
