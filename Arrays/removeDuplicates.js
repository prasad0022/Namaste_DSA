
// Remove the duplicates from Array & return the number of unique elements:

const removeDuplicate = (arr) => {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j + 1;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 4, 5]));