
const maxFreqSum = (s) => {
    let map = new Map();
    let vowels = ["a", "e", "i", "o", "u"];
    let maxV = 0;
    let maxC = 0;

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            maxV = (map[s[i]] > maxV) ? map[s[i]] : maxV;
        } else {
            maxC = (map[s[i]] > maxC) ? map[s[i]] : maxC;
        }
    }

    return maxV + maxC;
}

console.log(maxFreqSum("successes"));