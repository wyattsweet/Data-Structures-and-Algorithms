const Graph = require('./AdjacencyList')

const initVertColorTracking = (vertices) => {
  const colorMapping = {};
  vertices.forEach((vertex) => {
    colorMapping[vertex] = 'white';
  })
  return colorMapping;
}

const buildGraph = () => {
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

  return graph;
}

module.exports = {
  buildGraph,
  initVertColorTracking,
} 
