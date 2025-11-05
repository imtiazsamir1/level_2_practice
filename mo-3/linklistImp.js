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
  insert(index, value) {
    //if unsexpected input

    if (index < 0 || index > this.length) {
      console.log("index array of bounds");
      return undefined;
    }
    // if the insert is in the start of the linked list

    if (index === 0) {
      return this.prepand(value);
    }

    // if the insert is in the end of the list

    if (index === this.length) {
      return this.append(value);
    }
    // if the insert is in the middle

    // find the leading node

    const leadingNode = this._traversToIndex(index - 1);
    const holdingNode = leadingNode.next;
    const newNode = new Node(value);

    holdingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
  }
  remove() {}

  _traversToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

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
