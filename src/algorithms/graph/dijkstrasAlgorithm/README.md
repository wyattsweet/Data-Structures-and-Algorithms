# Dijkstra's Algorithm

Used to find the shortest path from one node to another in a directed weighted graph. The total path distance will be determined by the sum of the edge values. The shortest path will be the sum with the lowest value. 

**Steps**
1. Create a function `dykstra` that takes a graph, the start and end nodes
* setup three variables at the top to track distance (`Object`), which nodes have and have not been visited (`Object`), the parent with the shortest path for each node (`Object`).
* Populate the distance as `Infinity` and visited as false for each node.
* Mark the distance as `0` and visited as true for the starting node
* Find the shortest path to each node
* Figure out the shortest node path using the parent object from the start to end

