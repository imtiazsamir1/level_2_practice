const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const map = new Map();
const interSection = [];

for (let n of arr1) map.set(n, true);

for (let n of arr2) {
  if (map.has(n)) interSection.push(n);
}
console.log(interSection);
