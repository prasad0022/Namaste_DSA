
// const isPalindrome = (s) => {
//     s = s.toLowerCase();
//     let str = "";
//     let rev = "";

//     for (let i = 0; i < s.length; i++) {
//         if (s[i].match(/[a-z0-9]/i)) {
//             str += s[i];
//             rev = s[i] + rev;
//         }
//     }

//     return str === rev;
// }

const isPalindrome = (s) => {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) i++;
        else if (!s[j].match(/[a-z0-9]/i)) j--;
        else if (s[i] === s[j]) {
            i++;
            j--;
        }
        else return false;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
