
// Binary Search:

const arr = [-1, 2, 3, 7, 9, 12];
const target = 7;

const binarySearch = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;
    let m;
    while (r >= l) {
        m = Math.floor((l + r) / 2);
        if (arr[m] === target) return m;
        else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
}

console.log(binarySearch(arr, target));