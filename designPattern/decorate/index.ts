export const decorate = () => {
  class Beverage {
    _description: string;

    constructor(description: string) {
      this._description = description;
    }

    get description(): string {
      return this._description;
    }

    cost(): number {
      return 1000;
    }
  }

  class Espresso extends Beverage {
    constructor(description: string) {
      super(description);
    }

    cost(): number {
      return super.cost() + 500;
    }
  }

  class CondimentDecorator {
    _beverage: Beverage;

    constructor(beverage: Beverage) {
      this._beverage = beverage;
    }

    get description(): string {
      return this._beverage.description;
    }
  }

  class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
      super(beverage);
    }

    get description(): string {
      return 'I am milk';
    }
  }

  const bever = new Beverage('bever desc');
  console.log(bever.cost());

  const espre = new Espresso('espresso desc');
  console.log(espre.cost());

  const milk = new Milk(espre);
  console.log(milk.description);
};

export default decorate;
