const Graph = require('./AdjacencyList')
const utils = require('./utils')

const { initVertColorTracking } = utils

const graph = new Graph();

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('b', 'e');
graph.addEdge('b', 'f');
graph.addEdge('e', 'i');
graph.addEdge('c', 'd');
graph.addEdge('c', 'g');
graph.addEdge('d', 'g');
graph.addEdge('d', 'h');

const COLORS = {
  white: 'white', // vertex hasn't been seen
  grey: 'grey', // vertex has been seen, but not explored. It's in the queue
  black: 'black' // vertex has been explored
}

function depthFirstSearch(graph, cb) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initVertColorTracking(vertices);

  for(let i = 0; i < vertices.length; i++) {
    const v = vertices[i];
    if (colors[v] === COLORS.white) {
      depthFirstSearchVisit(v, vertices, adjList, colors, cb);
    }
  }
}

function depthFirstSearchVisit(vert, vertices, adjList, colors, cb) {
  // mark vert as grey
  colors[vert] = COLORS.grey;
  if (cb) {
    cb(vert);
  }
  // get neighbors
  const neighbors = adjList.get(vert)
  // call depthFirstSearchVisit with neighbors if white
  for (let i = 0; i < neighbors.length; i++) {
    const n = neighbors[i];
    if (colors[n] === COLORS.white) {
      depthFirstSearchVisit(n, vertices, adjList, colors, cb);
    }
  }
  // mark vert as black
  colors[vert] = COLORS.black;
}

depthFirstSearch(graph, (v) => console.log(v));
