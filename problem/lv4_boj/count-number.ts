export const CountNumber = () => {
    const fs = require('fs');
    const input: String = fs.readFileSync('/dev/stdin').toString().split('\n');

    const N: Number = parseInt(input[0].trim());
    const numArr: Number[] = input[1].trim().split(' ').map((chr: string) => parseInt(chr));
    const target: Number = parseInt(input[2].trim());

    let count: Number = numArr.filter((num: Number) => num === target).length;
    console.log(count);
}  