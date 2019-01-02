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
  const visited = [];
  const pairs = [];  

  visited.push(0);

  while(visited.length < graph.length) {

    let parent;
    let pair;
    let pairWeight;

    const visitedCopy = visited.slice();

    visitedCopy.forEach(vertex => {
      // get the edges of the vertex at i
      const edges = graph[vertex];
      // lowest weight, grab the first weight in the array greater than 0
      let lowest;
      // vertex, or index of lowest weight edge
      let pairIndex;

      for (let x = 0; x < edges.length; x++) {
        const value = edges[x];


        if (value > 0 && !visited.includes(x) && (!lowest || value < lowest)) {
          lowest = value;
          pairIndex = x;
        }
      }

      if (!pair || lowest < pairWeight) {
        parent = vertex;
        pair = pairIndex;
        pairWeight = lowest;
      }
    })

    visited.push(pair);
    pairs.push({ edges: [parent, pair], weight: pairWeight })
  }
  return pairs;
}

console.log(prim(graph))
