
// Merge Sort:

const arr = [3, 5, 1, 4, 2, 6];

// Helper function to Merge 2 Sorted array:
const merge = (a1, a2) => {
    let m = a1.length;
    let n = a2.length;
    let p1 = 0;
    let p2 = 0;
    let sort = [];

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (a1[p1] < a2[p2] && p1 < m)) {
            sort[i] = a1[p1];
            p1++;
        } else {
            sort[i] = a2[p2];
            p2++;
        }
    }

    return sort;
}

// Merge Sort:

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort(arr));