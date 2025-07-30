
const arr = [4, 2, 3, 1, 6, 5];

// Binary Search:
// Find middle index & check if its equal to target.
const arr2 = [2, 5, 6, 9, 12, 15];
const binarySearch = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;
    while (r >= l) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] == target) return m;
        if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

// Bubble Sort:
// Push max number to right side one by one.
const bubbleSort = (arr) => {
    console.log("Bubble Sort:");
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Selection Sort:
// Swap min value to left side one by one. 
const selectionSort = (arr) => {
    console.log("Selection Sort:");
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j;
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
    let n = arr.length;
    for (let i = 1; i < n; i++) {
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
    let m = a1.length;
    let n = a2.length;
    let p1 = 0;
    let p2 = 0;
    let sort = [];

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || a1[p1] < a2[p2] && p1 < m) {
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
    let med = arr.length / 2;
    let left = mergeSort(arr.slice(0, med));
    let right = mergeSort(arr.slice(med));
    return merge(left, right);
}

console.log(mergeSort(arr));