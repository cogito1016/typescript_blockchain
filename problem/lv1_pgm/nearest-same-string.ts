/**
 * s	result
"banana"	[-1, -1, -1, 2, 2, 2]
"foobar"	[-1, -1, 1, -1, -1, -1]
 */
export const NearestSameString = () => {
  const example_S = 'banana';
  const example_S2 = 'foobar';

  //s는 영어 소문자
  function solution(s: string) {
    const index: number[] = [];
    const result: number[] = [];

    //JS에서 아스키코드를 이용하는 법
    //val.cahrCodeAt(val_idx)
    for (let i = 0; i < s.length; i++) {
      if (index[s.charCodeAt(i)] === undefined) {
        result.push(-1);
      } else {
        result.push(i - index[s.charCodeAt(i)]);
      }
      index[s.charCodeAt(i)] = i;
    }

    console.log(result);
  }

  solution(example_S);
};
