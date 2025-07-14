
// Sum of all numbers in an Array:

const arr = [1, 3, 2, 4, 10];
const n = arr.length - 1;

const sum = (n) => {
    if (n < 0) return 0;
    return arr[n] + sum(n - 1);
}

console.log(sum(n));