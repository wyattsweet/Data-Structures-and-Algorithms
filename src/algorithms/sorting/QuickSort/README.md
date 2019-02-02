# Quick Sort

Quick sort is also a divide and conquer style algorithm

**procedure**

1. The function `quickSort` takes an array as the argument
* Make a copy of the array
* Pick a random index as the pivot point
* Create a `leftArr` for values lower than the pivot
* Create a `rightArr` for values greater than the pivot
* Create a `centerArr` for the pivot and values equal to it
* iterate through the array and put each value into its proper array based on the value
* Call `quickSort` on the `left` array and the `right` array and save them to `leftSorted` and `rightSorted`.
* return an array `[...leftSorted, ...center, ...rightSorted]`
