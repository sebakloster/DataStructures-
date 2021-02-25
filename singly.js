class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    if (value) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  prepend(value) {
    if (value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }
  insert(index, value) {
    if (index <= this.length && index > 0) {
      let newNode = new Node(value);
      let nodeIndex = this.nodeByIndex(index);
      newNode.next = nodeIndex.next;
      nodeIndex.next = newNode;
      this.length++;
      return this;
    }
  }
  remove(index) {
    if (index <= this.length && index > 0) {
      let nodeToDelete = this.nodeByIndex(index);
      let nodeBefore = this.nodeByIndex(index - 1);
      nodeBefore.next = nodeToDelete.next;
      nodeToDelete.next = null;
      this.length--;
    }
    return this;
  }
  nodeByIndex(index) {
    let nodeIndex = this.head;
    for (let i = 1; i < index; i++) {
      nodeIndex = nodeIndex.next;
    }
    return nodeIndex;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
