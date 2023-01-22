import { FS } from "../common"
/**
 * 예제 입력 1 
    10 5
    1 10 4 9 2 3 8 5 7 6
    예제 출력 1 
    1 4 2 3
 */
export const NumberSorter = () => {
    const input: string[] = FS();

    input.shift();
    const numArr: number[] = input.map((str: string) => parseInt(str));

    numArr.sort((a, b) => a - b);
    console.log(numArr.join('\n'));
}