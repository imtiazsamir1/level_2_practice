const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const course = [
  [course1, "level-1"],
  [course2, "level-2"],
];

const map = new Map(course);
map.forEach((value, key) => "shohoz shorol simple" + key.value);
for (let key of map.keys()) {
  key.value = "shohoz shorol simple" + key.value;
}
console.log(map);
