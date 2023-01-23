import { READLINE } from "../common"

export const MatrixAdder = () => {
    const readline = READLINE();

    function solution(input) {
        const [x, y] = input[0].split(' ').map((str: string) => parseInt(str));

        input.shift()

        const arr = input.map((strArr) => strArr.split(' ').map((str) => parseInt(str)));

        for (let i = 0; i < y; i++) {
            let str = "";
            for (let j = 0; j < x; j++) {
                str += `${arr[i][j] + arr[i + y][j]} `;
            }
            console.log(str);
        }
    }

    readline(solution);
}  