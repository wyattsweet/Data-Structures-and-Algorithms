// TODO: Do a version that stores data in each node, such as name, and not just the index

const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0]
]

function prim(graph) {
  // store all vertices that have a pair
  const visited = [];
  // store the pairs
  const pairs = [];  

  // start it off by pushing the first vertex onto the visited array
  visited.push(0);

  while(visited.length < graph.length) {

    // visited vertex with lowest weight edge
    let parent;
    // neightboring vertex
    let pair;
    // the weight of the edge that connects them
    let pairWeight;

    // iterate over the visited vertices to find the one with the lowest weight
    visited.forEach(parentVertex => {
      // get the edges of the visited vertex
      const edges = graph[parentVertex];
      // variable to store the edge with the lowest weight
      let lowest;
      // vertex, or index of lowest weight edge
      let lowestIndex;

      // iterate over the edges
      for (let x = 0; x < edges.length; x++) {
        const value = edges[x];

        // crazy logic if the edge is greater than 0 and not in the visited array and lowest is either undefined or the value is lower than what's currently there
        if (value > 0 && !visited.includes(x) && (!lowest || value < lowest)) {
          lowest = value;
          lowestIndex = x;
        }
      }

      // after iterating over the edges store the lowest in pair if it's undefined or lower than what's currently there
      if (!pair || lowest < pairWeight) {
        parent = parentVertex;
        pair = lowestIndex;
        pairWeight = lowest;
      }
    })

    // save the final lowest pair to the pairs array and update visited
    visited.push(pair);
    pairs.push({ edges: [parent, pair], weight: pairWeight })
  }
  return pairs;
}

console.log(prim(graph))
