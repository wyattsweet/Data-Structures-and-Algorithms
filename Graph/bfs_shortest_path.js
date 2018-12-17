// Given a graph and a vertex use BFS to find the shortest path to every other vertex in the graph
// Also return predescessors for each vertex, or which vertex came before
// Source Learning JavaScript Dat Structure and Algorithms 3rd edition pg. 300

const Graph = require('./AdjacencyList');
const Queue = require('../Queue');

const graph = new Graph();

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('b', 'e');
graph.addEdge('b', 'f');
graph.addEdge('e', 'i');
graph.addEdge('c', 'g');
graph.addEdge('d', 'g');
graph.addEdge('d', 'h');

const initVertColorTracking = (vertices) => {
  const colorMapping = {};
  vertices.forEach((vertex) => {
    colorMapping[vertex] = 'white';
  })
  return colorMapping;
}

const colors = {
  white: 'white', // vertex hasn't been seen
  grey: 'grey', // vertex has been seen, but not explored. It's in the queue
  black: 'black' // vertex has been explored
}

const shortestPath = (graph, vertex) => {
  const adjList = graph.getAdjList();
  const pathCount = {};
  const predescessor = {};
  const queue = new Queue(); 
  const vertices = graph.getVertices();
  const vertColors = initVertColorTracking(vertices);

  // init pathCount to 0 for each vertex
  for (let i = 0; i < vertices.length; i++) {
    pathCount[vertices[i]] = 0;
  }

  // init predescessors
  for (let i = 0; i < vertices.length; i++) {
    predescessor[vertices[i]] = null;
  }

  vertColors[vertex] = colors.grey;
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    // dequeue vertex
    const v = queue.dequeue();
    // get adjacency list of all connected vertices
    const neighbors = adjList.get(v);

    for (let i = 0; i < neighbors.length; i++) {
      const n = neighbors[i];
      // proceed if vertex hasn't been seen
      if (vertColors[n] === colors.white) {
        // mark grey for seen
        vertColors[n] = colors.grey;
        // increment pathCount, the current dequeued vertex + 1
        pathCount[n] = pathCount[v] + 1;
        // set predescessor to dequeued vertex
        predescessor[n] = v;
        // add neighboring vertex into queue
        queue.enqueue(n);
      }
      // mark vertex as explored
      vertColors[v] = colors.black;
    }
  }

  return { pathCount, predescessor };
}

console.log(shortestPath(graph, 'a'));
