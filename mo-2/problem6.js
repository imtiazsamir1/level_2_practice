const arr = ["a", "b", "c", "a", "b", "a"];

const map = new Map();

for (let item of arr) {
  if (!map.has(item)) {
    map.set(item, true); // value doesn't matter, key must be unique
    console.log(map);
  }
}
const uniqueArray = [...map.keys()];

console.log(uniqueArray);
console.log(...map.keys());
