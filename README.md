# Algorithm and Data Structures in JavaScript

This repo contains succinct, straight forward descriptions of common (and not so common) algorithms and data structures. It also contains examples of each, currently in JavaScript.

## General Terms

* **Topological Sorting** – When a set of tasks or steps need to be executed in a specific order, topological sort orders them in the order they need to be executed. A real world example of this is courses that have pre-requisites, you have to take Drawing I before you can take Drawing II.

## Binary Search Tree

### in-order traversal

A In order traversal of a binary search tree will visit each node in order from smallest to largest. The traversal will start at the left most node and visit each node until it reaches the right most node.

### pre-order traversal

pre-order traversal visits the current node prior to its descendants. In pre-order traversal you visit the root node first, then the left, then the right.

### post-order traversal

The current node is visited after its descendants have been visited. 

## Graphs

A graph is an abstract model of a network structure. It is a set of nodes or vertices connected by edges.

A graph is composed of a set of vertices and a set of edges connecting the vertices.

### Terms

* **vertices** are the individual nodes in a graph
* Vertices connected by an edge are called **adjacent vertices**.
* **Degree** – The number of adjacent vertices.
* **Path** – A sequence of consecutive vertices. Where at each point the vertices are connected by an edge. A simple path does not contain any repeating vertices.
* **Acyclic graph** doesn't have any cycles. A cycle is if you are able to travel from one vertex to another and back again without taking the same path, or simply a loop.
* **Connected Graph** There is a path from any one vertex to any other.
* **Directed Graph** Edges have a direction and you can only move in that direction.
* **Undirected Graph** You can travel either direction on an edge
* **unweighted** A graph where the edges don't have value 
* **weighted** A graph where the edges have values
* **Directed Acyclic Graph (DAG)** A graph that is directed and acyclic. You can only do topological sort on a DAG graph.
* **negative weight cycle** a cycle with weights that sum to a negative number
* **Minimum spanning tree (MST)** The subset of a undirected weighted graph with the minimum possible total edge weight. This can solve network design questions such as the island bridge problem. Common algorithms used to find the MST are Prim and Kruskal's algorithms.

### Represent a graph

There are two common ways to represent graphs.

#### Adjacency Matrix

In the adjacency matrix your graph is represented as a 2 dimensional array. Each node is associated with an array index. An edge is represented by placing a `1` in the array at the appropriate index. In the below example `A` has a connection to `B` and `C`.

```
    A  B  C
A [[0, 1, 1],
B  [1, 0, 0],
C  [1, 0, 0]]
```

#### Adjacency List

The adjacency list consists of a list of adjacent vertices for every vertex of the graph.

```
{
  A: ['b', 'c'],
  B: ['A'],
  C: ['A']
}
```

#### The Incidence Matrix

An incidence matrix is a matrix where each row of the matrix represents a vertex and each column represents an edge. If `array[v][e] == 1` where `v` = vertex and `e` is an edge you know that edge touches that vertex. If it is `0`, then you know it does not. Incidence matrices are useful when you have more edges that vertices.

### Graph Traversals

Traversals are used to visit each node on a graph. There are two algorithms that can be used to traverse a graph, **Breath-first search** and **Depth-first search**. With these traversal algorithms we must keep keep of each vertex when we first visit it and keep track of which vertices have not been completely explored. To completely explore a vertex, we must look at each edge of the vertex. For both graph traversal algorithms you can start on any vertex and will need to specify what vertex to start on up front.

#### Breadth-First Search

The breadth-first search algorithm starts traversing the graph at the specified vertex and visits each of it's adjacent nodes one layer at a time. It in called breadth-first search because it visits the nodes first widely and then deeply. In BFS, vertices are often stored in a queue. The oldest unexplored vertices are visited first.

#### Depth-First Search

In DFS we can store the vertices we come across in a stack. We would explore all adjacent vertices if they are available

### Algorithms

#### Dijkstra's Algorithm

Used to find the shortest path from one node to another in a directed weighted graph. The total path distance will be determined by the sum of the edge values. The shortest path will be the sum with the lowest value. 

**Steps**
1. Create a function `dykstra` that takes a graph, the start and end nodes
* setup three variables at the top to track distance (`Object`), which nodes have and have not been visited (`Object`), the parent with the shortest path for each node (`Object`).
* Populate the distance as `Infinity` and visited as false for each node.
* Mark the distance as `0` and visited as true for the starting node
* Find the shortest path to each node
* Figure out the shortest node path using the parent object from the start to end

#### Floyd-Warshall Algorithm

A dynamic programming algorithm which finds the shortest path between all pairs of vertices in a weighted graph.

### Prim's Algorithm

A greedy algorithm that finds the MST for a connected weighted undirected graph

**Steps**

1. use an array called `visited` to keep track of the visited nodes.
* Pick a node (`a`) to start the algorithm and add it to the `visited` list
* Examine all vertices reachable by `a` and pick the one with the smallest edge (`b`) (greedy)
* Now examine all the edges reachable by `a` and `b`, pick the smallest one not in the visited list (`c`)
* Add `c` to the `visited` list.
* Continue until all vertices have been added to the visited list
* Return the edge and weight –

```js
[
  { edge: ['a', 'b'], weight: 2 },
  { edge: ['b', 'c'], weight: 2 }
]
```
