
// Find if given number is Palindrome:

// Sol 1:
const isPalindrome_1 = (num) => {
    return parseInt(num.toString().split('').reverse().join('')) === num;
}

// console.log(isPalindrome_1(-121));

// Sol 2:

const isPalindrome_2 = (num) => {
    if (num < 0) return false;

    const number = num;
    let rev = 0;
    while (num > 0) {
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return rev === number;
}

console.log(isPalindrome_2(11211));