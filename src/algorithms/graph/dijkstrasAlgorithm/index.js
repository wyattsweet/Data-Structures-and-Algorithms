// directed weighted adjacency matrix
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
]

// TODO: break the different parts out into seperate functions

function dijkstra(graph, start, end) {
  // track the shortest distance to each node from the start
  const distance = {};
  // track which nodes have and have not been visited
  const visited = {};
  // track the parent node
  const parent = {};

  // populate distance and visited
  for(let i = 0; i < graph.length; i++) {
    distance[i] = Infinity;
    visited[i] = false;
  }
  
  // mark distance and visited for the starting node
  distance[start] = 0;
  visited[start] = true;

  // find shortest path to each node
  for (let i = 0; i < graph.length; i++) {
    const edges = graph[i]; // the list of edges for the current node
    const nodeDist = distance[i]; // the shortest distance for the current node
    edges.forEach((edge, index) => {
      if (edge > 0) {
        // console.log(`current node ${i}\n`, `node distance ${nodeDist}\n`, `neighbor node ${index}\n`, `edge value ${edge}`)
        if (!visited[index]) {
          distance[index] = edge + nodeDist;
          parent[index] = i;
          visited[index] = true;
        }
        if (visited[index] && (edge + nodeDist) < distance[index]) {
          distance[index] = edge + nodeDist;
          parent[index] = i;
        }
      }
    })

  }

  // figure out the path
  const path = [];
  let parentVal = end;
  path.push(parentVal);
  while (parentVal !== start) {
    parentVal = parent[parentVal]
    path.push(parentVal);
  }
  return { distance: distance[end], path: path.reverse() };
}

console.log(dijkstra(graph, 0, 5)) // { distance: 6, path: ['a', 'b', 'e', 'f'] }
