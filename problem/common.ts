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
    const input: string[] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    return input;
}

export const READLINE = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = ''
    rl.on('line', function (line) {
        input += line + '\n';
    }).on('close', function () {
        process.exit();
    });

    return rl;
}