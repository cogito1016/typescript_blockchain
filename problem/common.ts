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
export const Common = () => {
    const fs = require('fs');
    const input : string[] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    return input;
}