
const balancedStringSplit = (s) => {
    let countR = 0;
    let countL = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        (s[i] === "R") ? countR++ : countL++;
        if (countL === countR) {
            count++;
            countL = 0;
            countR = 0;
        }
    }

    return count;
}

console.log(balancedStringSplit("RLRRLLRRLRLL"));