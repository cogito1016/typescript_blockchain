import {Common} from '../common'

export const LessThanX = () => {
    const input = Common();
    const firstLine = input[0].split(' ');
    const numArr = input[1].split(' ').map((str:string)=>parseInt(str));

    const arrLen : number = parseInt(firstLine[0]);
    const x : number = parseInt(firstLine[1]);

    const result = numArr.filter((num: number)=>num < x);

    console.log(...result);
}