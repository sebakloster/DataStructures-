class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class myQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else if (this.length > 0) {
      let nodeHolder = this.head;
      this.head = this.head.next;
      nodeHolder.next = null;
      this.length--;
    }
    return this;
  }
  peek() {
    return this.head;
  }
}

const queue = new myQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
