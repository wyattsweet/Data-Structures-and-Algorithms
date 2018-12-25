// modified version of the DFS algorithm that also returns the following information
// discovery time
// finish time – The time it takes for a node to be marked as finished
// predecessor to a given node

const Graph = require('./AdjacencyList')
const utils = require('./utils')

const { buildGraph, initVertColorTracking } = utils

const graph = buildGraph();

const COLORS = {
  white: 'white', // vertex hasn't been seen
  grey: 'grey', // vertex has been seen, but not explored. It's in the queue
  black: 'black' // vertex has been explored
}


function depthFirstSearch(graph, cb) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initVertColorTracking(vertices);
  const d = {};
  const f = {};
  const time = { count: 0 }
  let count = 1;

  for(let i = 0; i < vertices.length; i++) {
    d[vertices[i]] = 0;
  }

  for(let i = 0; i < vertices.length; i++) {
    const v = vertices[i];
    if (colors[v] === COLORS.white) {
      depthFirstSearchVisit(v, vertices, adjList, colors, cb, d, f, time);
    }
  }


  return { discovery: d, finishTime: f }
}

function depthFirstSearchVisit(vert, vertices, adjList, colors, cb, d, f, time) {
  // mark vert as grey
  colors[vert] = COLORS.grey;

  d[vert] = ++time.count;
  if (cb) {
    cb(vert);
  }

  // get neighbors
  const neighbors = adjList.get(vert)
  // call depthFirstSearchVisit with neighbors if white
  for (let i = 0; i < neighbors.length; i++) {
    const n = neighbors[i];
    if (colors[n] === COLORS.white) {
      depthFirstSearchVisit(n, vertices, adjList, colors, cb, d, f, time);
    }
  }
  // mark vert as black
  f[vert] = ++time.count;
  colors[vert] = COLORS.black;
}

console.log(depthFirstSearch(graph, (v) => console.log(v)))
