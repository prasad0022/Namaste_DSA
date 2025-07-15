
// For given n, calculate F(n);
// F(0) = 0 ; F(1) = 1 ; F(n) = F(n-1) + F(n-1);

const fib = (n) => {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));