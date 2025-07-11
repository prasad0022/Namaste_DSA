
// Find Missing Number:

const missingNum = (arr) => {
    let missingNum;
    let currSum = 0;
    let finalSum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        currSum = currSum + arr[i];
    }

    finalSum = (n * (n + 1)) / 2;

    missingNum = finalSum - currSum;

    return missingNum;
}

console.log(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]));