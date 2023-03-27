import { FS } from '../common';

export const MaxFinder = () => {
  const numArr: number[] = FS().map((str) => parseInt(str));

  const maxVal: number = numArr.reduce(
    (prev, curr) => (prev < curr ? curr : prev),
    0
  );
  // const loc = numArr.findIndex((num:number)=>num===maxVal)+1;
  const loc: number = numArr.indexOf(maxVal) + 1;

  console.log(maxVal);
  console.log(loc);
};
