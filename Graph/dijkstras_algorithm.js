// in this implementation I'm tracking the shortest path to all nodes on a graph from a starting node

// directed weighted adjacency matrix
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
]

// The total path distance will be determined by the sum of the edge values. The shortest path will be the sum with the lowest value.

function dijkstras(graph, start) {
  // track the distance and initiate all nodes with a distance of infinity
  const distance = {};
  const visited = {};
  for(let i = 0; i < graph.length; i++) {
    distance[i] = Infinity;
    visited[i] = false;
  }
  
  distance[start] = 0;
  visited[start] = true;

  for (let i = 0; i < graph.length; i++) {
    const edges = graph[i]; // the list of edges for the current node
    const nodeDist = distance[i]; // the shortest distance for the current node
    edges.forEach((edge, index) => {
      if (edge > 0) {
        // console.log(`current node ${i}\n`, `node distance ${nodeDist}\n`, `neighbor node ${index}\n`, `edge value ${edge}`)
        if (!visited[index]) {
          distance[index] = edge + nodeDist;
          visited[index] = true;
        }
        if (visited[index] && (edge + nodeDist) < distance[index]) {
          distance[index] = edge + nodeDist;
        }
      }
    })
  }
  return distance;
}

console.log(dijkstras(graph, 0))
