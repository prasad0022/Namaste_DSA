
// Find Factorial using Recursion:

const factorial = (n) => {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));