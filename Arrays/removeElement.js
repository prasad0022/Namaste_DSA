
/* Given an integer Array <nums> & a integer <val>, remove all occurences of <val>
 in <nums> in place. */

const removeElement = (nums, val) => {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
}

console.log(removeElement([1, 5, 2, 2, 3, 2, 4], 2));