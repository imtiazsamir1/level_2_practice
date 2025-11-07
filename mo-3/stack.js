// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(value) {
//     this.items.push(value);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     return this.items.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     return this.items[this.items.length - 1];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   print() {
//     console.log(this.items);
//   }
// }
// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(40);
// stack.push(500);
// stack.print;
// //console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());

export default class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.slice().reverse().join(" -> "));
  }
}
const stack = new Stack();

// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.push(60);
// stack.push(70);
// stack.print();
// console.log(stack.peek()); //peek
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
