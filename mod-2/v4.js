// const numbers = [1, 5, 3, , 4, 7, 5];

// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
//console.log(hasEvenNumber);

// const currentUserRoles = ["user", "editor", "manager"];
// const featureAccessRoles = ["admin", "manager"];

// const canAccess = currentUserRoles.some((role) =>
//   featureAccessRoles.includes(role)
// );
// console.log(canAccess);

//todo

// const arr = Array.from({ length: 5 }, (value, i) => i * i);
// console.log(arr);

//todo

const range = (start, stop, step) =>
  Array.from(
    {
      length: Math.ceil((stop - start) / step),
    },
    (value, i) => start + i * step
  );
console.log(range(0, 11, 3));
