
// Best time to Buy & Sell a stock:

const maxProfit_1 = (arr) => {
    let profit = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i] && (arr[j] - arr[i]) > profit) {
                profit = arr[j] - arr[i];
            }
        }
    }
    return profit;
}

//console.log(maxProfit_1([7, 6, 5, 3, 6, 4]));

const maxProfit_2 = (arr) => {
    let min = arr[0];
    let profit = 0;
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] - min) > profit) {
            profit = arr[i] - min;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return profit;
}

console.log(maxProfit_2([7, 1, 3, 5, 6, 4]));