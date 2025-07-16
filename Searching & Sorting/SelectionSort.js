
// Selection Sort:

const arr = [4, 1, 2, 6, 5];

const selectionSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;

        // find index of min num:
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Swap min num to i'th index:
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

    }

    return arr;
}

console.log(selectionSort(arr));