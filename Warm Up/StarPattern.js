
const row = 6;
const col = 4;
for (let i = 0; i < row; i++) {
    let star = "";
    for (let j = 0; j < col; j++) {
        star = star + "*";
    }
    // console.log(star);
}

/* ********************************** */

for (let i = 0; i < row; i++) {
    let star = "";
    for (let j = 0; j <= i; j++) {
        star = star + "*";
    }
    // console.log(star);
}

/* ********************************** */

for (let i = 0; i < row; i++) {
    let star = "";
    for (let j = 1; j <= i + 1; j++) {
        star = star + j;
    }
    // console.log(star);
}

/* ********************************** */

for (let i = 0; i < row; i++) {
    let star = "";
    for (let j = 0; j <= i; j++) {
        star = star + (i + 1);
    }
    // console.log(star);
}

/* ********************************** */

for (let i = row; i > 0; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + j;
    }
    // console.log(star);
}

/* ********************************** */

for (let i = row; i > 0; i--) {
    let star = "";
    for (let j = 0; j < i; j++) {
        star = star + "*";
    }
    // console.log(star);
}

/* ********************************** */

for (let i = 0; i < row; i++) {
    let star = "";
    for (let j = col - 1; j >= 0; j--) {
        if (j > i) star = star + " ";
        else star = star + "*"
    }
    // console.log(star);
}

/* ********************************** */

for (let i = 0; i < row; i++) {
    let star = "";
    for (let j = 0; j < i + 1; j++) {
        if (j % 2 === 0) star = star + "1";
        else star = star + "0"
    }
    // console.log(star);
}

/* ********************************** */
let toggle = 1;
for (let i = 0; i < row; i++) {
    let star = "";
    for (let j = 0; j < i + 1; j++) {
        star = star + toggle;
        if (toggle == 1) toggle = 0;
        else toggle = 1;
    }
    // console.log(star);
}