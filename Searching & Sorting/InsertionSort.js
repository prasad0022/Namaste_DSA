
// Insertion Sort:

const arr = [3, 2, 5, 4, 1, 6];

const insertionSort = (arr) => {
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

console.log(insertionSort(arr));