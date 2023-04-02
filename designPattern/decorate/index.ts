import { Espresso } from './beverage/espresso';
import { Milk } from './condiment-decorator/milk';

export const decorate = () => {
  const espre = new Espresso('espresso desc');
  console.log(espre.cost());

  const milk = new Milk(espre);
  console.log(milk.description);
  console.log(milk.cost);
};

export default decorate;
