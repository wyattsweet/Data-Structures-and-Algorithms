// This BFS algorithm uses our Queue data structure to "process" vertices. It also uses a color system to
// keep track of which vertices have been seen and which have been visited.

// time complexity: worst case scenario each vertex could have an edge to every other vertex which would make it O(n^2)
// space complexity: We are storing the graph twice, once for the graph itself and again in vertColors. That would be O(n) 

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

const colors = {
  white: 'white', // vertex hasn't been seen
  grey: 'grey', // vertex has been seen, but not explored. It's in the queue
  black: 'black' // vertex has been explored
}

const initVertColorTracking = (vertices) => {
  const colorMapping = {};
  vertices.forEach((vertex) => {
    colorMapping[vertex] = 'white';
  })
  return colorMapping;
}

const breadthFirstSearch = (graph, startVertex, callback) => {
  const adjList = graph.getAdjList();
  const vertices = graph.getVertices();
  const vertColors = initVertColorTracking(vertices);
  const queue = new Queue();  

  vertColors[startVertex] = colors.grey;
  queue.enqueue(startVertex);

  while(!queue.isEmpty()) {
    const node = queue.dequeue();
    const neighbors = adjList.get(node);

    neighbors.forEach((vert) => {
      if (vertColors[vert] === colors.white) {
        vertColors[vert] = colors.grey;
        queue.enqueue(vert);
      }
    })

    callback(node);
    vertColors[node] = colors.black;
  }
}

breadthFirstSearch(graph, 'a', (v) => console.log(v));
