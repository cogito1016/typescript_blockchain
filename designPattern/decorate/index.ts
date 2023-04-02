import { Espresso } from './beverage/espresso';
import { Moca } from './beverage/moca';
import { Milk } from './condiment-decorator/milk';
import { Whip } from './condiment-decorator/whip';

export const decorate = () => {
  const espre = new Espresso();
  const milk = new Milk(espre);
  console.log(milk.description);
  console.log(milk.cost);

  let moca = new Moca();
  moca = new Whip(moca);
  moca = new Milk(moca);
  console.log(moca.description);
  console.log(moca.cost());
};

export default decorate;
