console.log('hello');

class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  threePop() {
    this._arr.pop();
    this._arr.pop();
    this._arr.pop();
  }
  threePeek() {
    if (this._arr.length < 3) {
      return false;
    }

    if (
      this._arr[this._arr.length - 1] === 3 &&
      this._arr[this._arr.length - 2] === 2 &&
      this._arr[this._arr.length - 3] === 1
    ) {
      return true;
    }

    return false;
  }
}

function solution(ingredients) {
  let count = 0;
  const stack = new Stack();
  const size = ingredients.length;

  for (let i = 0; i < size; i++) {
    const number = ingredients[i];

    if (number === 1 && stack.threePeek()) {
      stack.threePop();
      count++;
      continue;
    }

    stack.push(number);
  }

  return count;
}

console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); //2
// console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2
