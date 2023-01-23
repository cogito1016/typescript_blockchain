import { READLINE } from "../common"

export const PartitionValueCounter = () => {
    const readline = READLINE();

    function solution(input: string[]) {
        const inputVal: string[] = input[0].split(' ');

        let count: number = 0;

        //271
        const P: number = parseInt(inputVal[1]);
        //3
        const P_LEN: number = inputVal[1].length;
        //7
        const T_LEN: number = inputVal[0].length;
        const T: string = inputVal[0];

        //p의 길이로 t를 자르는 부분 substring
        let front = 0;
        let back = P_LEN;

        while (back <= T_LEN) {
            const targetT = parseInt(T.substring(front, back));

            if (targetT <= P)
                count++

            front++;
            back++;
        }

        console.log(count);
    }

    readline(solution);
}