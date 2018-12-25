# Algorithm and Data Structures in JavaScript

Basic description of common programming data structures and algorithms. Examples of each in JavaScript.

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

- **vertices** are the individual nodes in a graph
- Vertices connected by an edge are called **adjacent vertices**.
- **Degree** – The number of adjacent vertices.
- **Path** – A sequence of consecutive vertices. Where at each point the vertices are connected by an edge. A simple path does not contain any repeating vertices.
- **Acyclic graph** doesn't have any cycles. A cycle is if you are able to travel from one vertex to another and back again without taking the same path, or simply a loop.
- **Connected Graph** There is a path from any one vertex to any other.
- **Directed Graph** Edges have a direction and you can only move in that direction.
- **Undirected Graph** You can travel either direction on an edge
- Graphs can be **unweighted** or **weighted** where edges have a value

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


