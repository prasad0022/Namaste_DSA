
// Reverse a given Number:

const reverseNum = (num) => {
    let rev = 0;
    const numCopy = num;
    num = Math.abs(num);
    while (num > 0) {
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    const limit = Math.pow(2, 31);
    if (rev < -limit || rev > limit) return 0;

    return numCopy < 0 ? -rev : rev;
}

console.log(reverseNum(-80801));