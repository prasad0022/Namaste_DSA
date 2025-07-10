
// Merge Sort Array:

// --> Sol 1:
const mergeSort_1 = (nums1, m, nums2, n) => {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < (m + n); i++) {
        if (p2 >= n || (nums1Copy[p1] < nums2[p2] && p1 < m)) {
            nums1[i] = nums1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }

    return nums1;
}
// console.log(mergeSort_1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// --> Sol 2:
const mergeSort_2 = (nums1, m, nums2, n) => {
    let k = nums1.length - 1;
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = k; i >= 0; i--) {

        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }

    return nums1;

}
console.log(mergeSort_2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));