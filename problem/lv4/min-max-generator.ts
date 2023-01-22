import { Common } from "../common"

export const MinMaxGenerator = () => {
    const input: string[] = Common();
    const numArr: number[] = input[1].split(' ').map((str: string) => parseInt(str));

    //reduce를 이용하여 numArr의 최소값 구하기
    const min: number = numArr.reduce((prev, curr) => prev > curr ? curr : prev, 1000000);
    const max: number = numArr.reduce((prev, curr) => prev < curr ? curr : prev, -1000000);

    console.log(`${min} ${max}`);
}