const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
];

const userRole = new Map();

for (let user of users) {
  if (!userRole.has(user.role)) {
    userRole.set(user.role, []);
  }
  userRole.get(user.role).push(user.name);
}
console.log(userRole);
