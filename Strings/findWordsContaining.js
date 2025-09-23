
const findWordsContaining = (words, x) => {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        let n = words[i].length;
        for (let j = 0; j < n; j++) {
            if (words[i][j] === x) {
                arr.push(i);
                break;
            }
        }
    }
    return arr;
}

console.log(findWordsContaining(["leet", "code", "hi", "ride"], "e"));
