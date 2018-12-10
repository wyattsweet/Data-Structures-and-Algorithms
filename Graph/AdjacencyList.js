const Dictionary = require('../Dictionary');

class Graph {
  constructor(isDirected) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []); 
    }
  }

  addEdge(v1, v2) {
    if (!this.vertices.includes(v1)) {
      this.addVertex(v1);
    }

    if (!this.vertices.includes(v2)) {
      this.addVertex(v2);
    }

    if (!this.adjList.get(v1).includes(v2)) {
      this.adjList.get(v1).push(v2);
    }

    if (!this.isDirected && !this.adjList.get(v2).includes(v1)) {
      this.adjList.get(v2).push(v1);
    }
  }

  toString() {
    let string = '';
    this.vertices.forEach((vertex) => {
      const edges = this.adjList.get(vertex);
      string = `${string}${vertex} -> `
      edges.forEach(edge => {
        string = `${string}${edge} `
      })
      string += '\n';
    })
    return string; 
  }

  getAdjList() {
    return this.adjList;
  }

  getVertices() {
    return this.vertices;
  }
}

module.exports = Graph;
