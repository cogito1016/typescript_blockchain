export const little_jungmin = () => {
  const input = '77 77 7777';
  console.log(solution(input));
};

const solution = (input: string): number => {
  const result = input
    .split(' ')
    .map((str) => parseInt(str))
    .reduce((a, b) => a + b, 0);
  return result;
};
