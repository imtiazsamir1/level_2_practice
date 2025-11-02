const arr = [1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 6];

const freq = new Map();
for (let num of arr) {
  freq.set(num, (freq.get(num) || 0) + 1);
}
console.log(freq);
