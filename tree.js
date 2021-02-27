class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value) {
    let currentNode = this.root;
    while (true) {
      if (!currentNode) {
        return "There is no node with that value";
      }
      if (value < currentNode.value) {
        if (currentNode.value != value) {
          currentNode = currentNode.left;
        } else {
          return currentNode;
        }
      } else {
        if (currentNode.value != value) {
          currentNode = currentNode.right;
        } else {
          return currentNode;
        }
      }
    }
  }
}

let myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(2);
myBinarySearchTree.insert(8);
myBinarySearchTree.insert(17);
myBinarySearchTree.insert(170);
