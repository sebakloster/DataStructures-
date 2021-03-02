class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addNodes(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push[node2];
    this.adjacentList[node2].push[node1];
  }
}

let myGraph = new Graph();
