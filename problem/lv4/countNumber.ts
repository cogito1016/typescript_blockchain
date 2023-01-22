import { readFileSync } from 'fs';

// var fs = 
var input = readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b); 