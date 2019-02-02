# Merge Sort

Merge sort is a divide and conquer style algorithm. 

**procedure**

1. Define the function `mergeSort`
* create a base case `if (arr.length < 2) { return arr; }`
* Define a variable `middle` and set it to the approximate middle index of the array 
* split the array into two arrays at `middle` and call `mergeSort` recursively on each half
* call another function `merge` with the result
* `merge` will take the two arrays and return one sorted array
