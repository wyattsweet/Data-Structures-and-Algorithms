// topological sort of a directed acyclic graph

const Graph = require('./AdjacencyList');
const dfs_discovery_time = require('./dfs_discovery_time')

const myVerticies = ['a', 'b', 'c', 'd', 'e', 'f']

const graph = new Graph(true);

graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('b', 'd');
graph.addEdge('b', 'e');
graph.addEdge('c', 'f');
graph.addEdge('f', 'e');

const finish = dfs_discovery_time(graph).finishTime;
const values = [];

// put node value and discovery time in array. Ex – [['a', 4], ['b', 3], ['c', 1]]
for (let node in finish) {
  values.push([node, finish[node]]);
}

const sortedValues = values.sort((a, b) => {
  return b[1] - a[1];
})

let result = sortedValues[0][0];

for(let i = 1; i < sortedValues.length; i++) {
  result = `${result} - ${sortedValues[i][0]}`
}

console.log(result);
