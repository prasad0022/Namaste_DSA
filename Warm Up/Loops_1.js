
// 1. Print all Even numbers of Array:

const printEven = (arr) => {
    return arr.filter(num => num % 2 === 0);
}

// console.log(printEven([1, 2, 3, 4]));

/* **************************************************** */

// 2. Search index of given number in an Array:

const findIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
}

// console.log(findIndex([1, 5, 9, 2, 3], 10));

/* **************************************************** */

// 3. Count Nageative numbers in an Array:

const negativeCount = (arr) => {
    return arr.filter(num => num < 0).length;
}

// console.log(negativeCount([2, -3, 7, -5, -4, 2, 4]));

/* **************************************************** */

// 4. : Find min & max number in an Array:

const findMinMax = (arr) => {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    console.log(`Min: ${min} | Max: ${max}`);
}

// findMinMax([5, 3, 8, 4, 7, 8, 3, 10]);

/* **************************************************** */

// 5. Find Second Largest Number in an Array:

const findSecondMax = (arr) => {
    if (arr.length < 2) return null;

    let max = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) secondMax = arr[i];

    }
    return { max, secondMax };
}

console.log(findSecondMax([3, 6, 2, 8, 5, 7, 8]));