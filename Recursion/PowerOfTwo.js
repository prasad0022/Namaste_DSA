
// Return true if given number is Power of 2.

const isPow2 = (n) => {
    if (n == 1) return true;
    if (n < 1 || n % 2 !== 0) return false;

    return isPow2(n / 2);
}

console.log(isPow2(6));