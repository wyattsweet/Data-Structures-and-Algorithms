# Graph

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
