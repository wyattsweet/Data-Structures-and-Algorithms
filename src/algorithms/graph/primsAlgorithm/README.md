# Prim's Algorithm

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

###### resources
* [https://www.youtube.com/watch?v=cplfcGZmX7I](https://www.youtube.com/watch?v=cplfcGZmX7I)
