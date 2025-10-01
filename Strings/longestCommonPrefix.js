
const longestCommonPrefix = (s) => {
    let x = 0;
    while (x < s[0].length) {
        let ch = s[0][x];
        for (let i = 1; i < s.length; i++) {
            if (ch !== s[i][x] || x == s[i].length) {
                return s[0].substring(0, x);
            }
        }
        x++;
    }
    return s[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));