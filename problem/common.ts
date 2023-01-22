
export const Common = () => {
    const fs = require('fs');
    const input : String[] = fs.readFileSync('/dev/stdin').toString().split('\n');
    return input;
}