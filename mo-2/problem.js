const map = new Map();
map.set("Amit", 85);
map.set("Riya", 92);
map.set("John", 78);

//update
map.set("John", 88);

//delete
map.delete("Amit");

map.forEach((value, key) => {
  console.log(key + ":", value);
});
