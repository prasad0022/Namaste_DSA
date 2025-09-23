
const lengthOfLastWord = (s) => {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {
        if (s[n] === " ") {
            if (count) return count;
            else n--;
        } else {
            count++;
            n--;
        }
    }

    return count;
}

console.log(lengthOfLastWord("a"));