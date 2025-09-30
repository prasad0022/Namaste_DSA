
const reverseString = (s) => {
    s = s.split('');
    let n = s.length;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
        let temp = s[i];
        s[i] = s[n - i - 1];
        s[n - i - 1] = temp;
    }
    return s.join('');
}

console.log(reverseString("hello"));