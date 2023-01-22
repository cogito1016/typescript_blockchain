//index.ts는 현재 폴더에 있는 모든 모듈을 export하는 역할을 한다.
import { CountNumber } from './count-number';
import { LessThanX } from './less-than-x';
import { MinMaxGenerator } from './min-max-generator';
import { NumberSorter } from './number-sorter';

export { CountNumber, LessThanX, MinMaxGenerator, NumberSorter };