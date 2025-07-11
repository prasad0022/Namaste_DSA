
// Find single number from an Array:

// --> Sol_1:

const singleNum_1 = (arr) => {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === 1) return arr[i];
    }

}

// --> Sol_2:

const singleNum_2 = (arr) => {
    let XOR = 0;
    for (let i = 0; i < arr.length; i++) {
        XOR = XOR ^ arr[i];
    }
    return XOR;
}

console.log(singleNum_2([1, 3, 5, 4, 5, 1, 3]));