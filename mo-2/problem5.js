const arr = ["a", "b", "c", "a", "b", "a"];

const freq = new Map();

for (let ch of arr) {
  freq.set(ch, (freq.get(ch) || 0) + 1);
}

for (let [key, value] of freq) {
  if (value > 1) {
    console.log(key, value);
  }
}
