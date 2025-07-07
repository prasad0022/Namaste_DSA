
// Find the count of digits in a given number:

const digitCount = (num) => {

    if (num === 0) return 1;

    num = Math.abs(num); // Handling -ve numbers

    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(digitCount(-9346));