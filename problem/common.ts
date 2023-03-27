//@ts-nocheck
/**
 * @param
 * 1
 * 2
 * 3
 * 4
 *
 * @returns
 * 1, 2, 3, 4
 *
 *
 * @param
 * 10 5
 * 1 10 4 9 2 3 8 5 7 6
 *
 * @returns
 * [ '10 5', '1 10 4 9 2 3 8 5 7 6' ]
 */
export const FS = () => {
  const fs = require('fs');
  const input: string[] = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
  return input;
};

/**
 * 
 * 백준제출예시 
 * const readline = require('readline');
   const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = [];
    rl.on('line', function (line) {
        input.push(line);
    }).on('close', function () {
        solution(input);
        process.exit();
    });
    return rl;

    function solution(input) {
        const numArr = input[1].split(' ').map((str) => parseInt(str));
        //reduce를 이용하여 numArr의 최소값 구하기
        const min = numArr.reduce((prev, curr) => prev > curr ? curr : prev, 1000000);
        const max = numArr.reduce((prev, curr) => prev < curr ? curr : prev, -1000000);
        console.log(`${min} ${max}`);
    }
 * 
 * @returns 
 */
export const READLINE = () => {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return function (solution) {
    let input = [];
    rl.on('line', function (line: string) {
      input.push(line);
    }).on('close', function () {
      solution(input);
      process.exit();
    });

    return rl;
  };
};
