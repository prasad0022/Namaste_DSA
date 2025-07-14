
let n = 10;

// Print n to 1 using Recursion:

const print_1 = (n) => {
    if (n == 0) return;
    console.log(n);
    print_1(--n);
}

print_1(n);

// Print 1 to n using Recursion:

const print_2 = (x) => {
    if (x > n) return;
    console.log(x);
    print_2(++x);
}

print_2(1);