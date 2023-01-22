import { Common } from "../common"

export const NumberSorter = () => {
    const input : string[] = Common();

    input.shift();
    const numArr : number[] = input.map((str:string)=>parseInt(str));

    numArr.sort((a,b)=>a-b);
    console.log(numArr.join('\n'));
}