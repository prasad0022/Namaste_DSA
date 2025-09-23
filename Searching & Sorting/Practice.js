
const arr = [4, 2, 3, 1, 6, 5];

// Binary Search:
// Find middle index & check if its equal to target.
const arr2 = [2, 5, 6, 9, 12, 15];
const binarySearch = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;
    let m;
    while (r >= l) {
        m = Math.floor((r + l) / 2);
        if (arr[m] == target) return m;
        if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

// Bubble Sort:
// Push max number to right side one by one.
const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}

// Selection Sort:
// Swap min value to left side one by one. 
const selectionSort = (arr) => {
    console.log("Selection Sort:");
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {

        let min = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[i]) {
                min = j
            }
        }

        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// Insertion Sort:
const insertionSort = (arr) => {
    console.log("Insertion Sort:");
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}

// Merge Sort:

// Function to merge two sorted array:
const merge = (a1, a2) => {
    let p1 = 0;
    let p2 = 0;
    let m = a1.length;
    let n = a2.length;
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

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let l = mergeSort(arr.slice(0, mid));
    let r = mergeSort(arr.slice(mid));
    return merge(l, r);
}

console.log(mergeSort(arr));