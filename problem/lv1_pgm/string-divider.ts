
export const StringDivider = () => {

    const EXAMPLE_1 = "a";

    const solution = (s: string) => {
        let result = 0;

        const sLen = s.length;
        let idx = 0;

        if (sLen === 1) {
            return 1;
        }

        while (idx < sLen - 1) {
            let sameCount = 0;
            let diffCount = 0;
            let x = s[idx];

            for (let i = idx; i < sLen; i++) {
                console.log(`target : ${x} curr : ${s[i]}`)

                let target = s[i];
                if (x === target) {
                    sameCount++;
                } else if (x !== target) {
                    diffCount++;
                }

                console.log(`same : ${sameCount} diff : ${diffCount}`)
                idx = i + 1;
                if (sameCount === diffCount) {
                    console.log('cut')
                    result++;
                    break;
                }
            }

            if (sameCount !== diffCount) {
                console.log('remained')
                result++;
                break;
            }

            if (idx === sLen - 1) {
                console.log('Last One');
                result++;
                break;
            }
        }

        console.log(result);
    }

    solution(EXAMPLE_1);
}