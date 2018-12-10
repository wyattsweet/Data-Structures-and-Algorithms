// LeetCode problem – https://leetcode.com/problems/evaluate-division/

var calcEquation = function(equations, values, queries) {
  const adjList = {};
  // fill in adjacencyList with given equations
  equations.forEach((e, i) => {
    const aValList = adjList[e[0]];
    const bValList = adjList[e[1]];
    const listA = aValList ? aValList : [];
    const listB = bValList ? bValList : [];
    adjList[e[0]] = [...listA, [e[1], values[i]]];
    adjList[e[1]] = [...listB, [e[0], (1 / values[i])]];
  })
  const results = [];
  // call evaluateExpression for each expression
  queries.forEach((q) => {
    results.push(evalExpression(q));
  })
  // build results list and return
  return results;
  
  // function for evaluating expressions
  function evalExpression(ex) {
    const checked = [];
    //    if neither variable is in the adjList return -1
    if (!adjList[ex[0]] || !adjList[ex[1]]) { return -1; }
    //    if both numbers from the experssion are equal return 1
    if (adjList[ex[0]] === adjList[ex[1]]) { return 1; }
    //    copy the denominators adjacent vertices as a queue;
    const queue = adjList[ex[0]].slice();
    //    check each queue for the numerator, if there's a match return the value
    for(let i = 0; i < queue.length; i++) {
      if (queue[i][0] === ex[1]) {
        return queue[i][1];
      }
    // keep track of which ones we've checked       
      checked.push(queue[i]);
    //    check the neighbors list
      const neighborList = adjList[queue[i][0]];
      for (let x = 0; x < neighborList.length; x++) {
        //    skip if those variables have already been checked
        if (checked.includes(neighborList[x])) { continue; }
        //    if the numerator is in a neighboring list add neighborVariableValue * neighborValue
        queue.push([neighborList[x][0], (neighborList[x][1] * queue[i][1])]);
      }
    }

    // if none of these match return -1
    return -1;
  }
};

const equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]];
const values = [3.0,4.0,5.0,6.0];
const queries = [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]];

console.log(calcEquation(equations, values, queries)); // [360.0, 0.00833, 20.0, 1.0, -1.0, -1.0]
