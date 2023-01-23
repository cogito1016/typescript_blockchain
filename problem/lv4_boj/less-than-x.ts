import { FS } from '../common'

/**
 * 예제 입력
    10 5
    1 10 4 9 2 3 8 5 7 6
    예제 출력
    1 4 2 3
 */
export const LessThanX = () => {
    const input = FS();
    console.log(input);
    const firstLine = input[0].split(' ');
    const numArr = input[1].split(' ').map((str: string) => parseInt(str));

    const arrLen: number = parseInt(firstLine[0]);
    const x: number = parseInt(firstLine[1]);

    const result = numArr.filter((num: number) => num < x);

    console.log(...result);
}