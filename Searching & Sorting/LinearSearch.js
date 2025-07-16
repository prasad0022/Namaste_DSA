
// Linear Search:

const linearSearch = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
    return -1;
}

console.log(linearSearch([2, 5, 6, 3, 7], 7));