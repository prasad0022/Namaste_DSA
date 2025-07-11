
// Max Consecutive Ones:

const maxOnes = (arr) => {
    let count = 0;
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            x++;
            if (x > count) count = x;
        } else {
            x = 0;
        }
    }
    return count;
}

console.log(maxOnes([1, 1, 0, 1, 1, 1, 0]));