
const numJewelsInStones = (jewels, stones) => {
    let count = 0;
    let set = new Set();
    for (let i = 0; i < jewels.length; i++) set.add(jewels[i]);
    for (let j = 0; j < stones.length; j++) if (set.has(stones[j])) count++;
    return count;
}

console.log(numJewelsInStones("Ab", "abbAb"));