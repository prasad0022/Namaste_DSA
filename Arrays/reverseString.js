
const reverseString = (arr) => {
    let len = arr.length;
    let halfLen = Math.floor(len / 2);
    let temp;
    for (let i = 0; i < halfLen; i++) {
        temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseString(["b", "c", "a", "d"]));