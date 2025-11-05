class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);

    //if the linkList is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  prepand(value) {
    const newNode = new Node(value);

    //if the node is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if the node is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  insert() {}
  remove() {}
  print() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" -> "), "-> null ");
  }
}
const linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.prepand(0);

linkList.print();
