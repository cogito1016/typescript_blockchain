import { READLINE } from "../common"

export const MatrixAdder = () => {
    const readline = READLINE();

    function solution(input) {
        const [y, x] = input[0].split(' ').map((str: string) => parseInt(str));

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

/**
1.
3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4 
5 5 100

4 4 4
6 6 6 
5 6 100

2.
3 4
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
5 5 5 5
6 6 6 6

5 5 5 5 
7 7 7 7
9 9 9 9

3.
1 1
1
2

3

4.
3 1
1
2
3
4
5
6

5
7
9
 */