class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    }
    let removedNode = this.top;
    this.top = this.top.next;
    this.top.next = null;
    this.length--;
    return removedNode;
  }
}

const myStack = new Stack();
