# Algorithm and Data Structures in JavaScript

This repo contains succinct, straight forward descriptions of common (and not so common) algorithms and data structures. It also contains examples of each, currently in JavaScript.

## General Terms

* **Topological Sorting** – When a set of tasks or steps need to be executed in a specific order, topological sort orders them in the order they need to be executed. A real world example of this is courses that have pre-requisites, you have to take Drawing I before you can take Drawing II.

## Data Structures

* [Dictionary](./Dictionary)
* Linked List
* Queue
* Stack
* Set
* [Graph](./graph)
    * Adjacency List
    * Adjacency Matrix
* Tree
    * [Binary Search Tree](./tree/binarySearchTree)

## Algorithms

### Uncategorized 

A list of general algorithms and interview questions. 

* [Palindrome Checker](./algorithms/palindromeChecker)
* [Balanced Parens] (./algorithms/balancedParens)
* [Most frequent integer](./algorithms/frequentInteger)
* [FizzBuzz](./algorithms/fizzBuzz)
* [Factorial](./algorithms/factorial)
* [Find the number of pairs whose sum is 10](./algorithms/findSumOf10)
* [Roman Numeral Converter](./algorithms/uncategorized/RomanNumeralConverter)

### Unsolved

* Write a function which converts roman numerals to actually numbers
* Write a function that converts numbers to roman numerals
* Write fibbonaci iteratively and recursively
* Implement `parseInt`
* Write a multiply function that multiples 2 integers without using `*`
* Calculate the mean, median, mode and range for a set of numbers.
## Sorting

These algorithms are extremely common and used to organize sets of data within our applications.

### Bubble Sort

This is the least complex sorting algorithm to implement but the time complexity is also the worst.

**steps**

1. Imagine a function that takes a unsorted array of numbers
* first look at the first two elements in the array (`a` and `b`)
* if `a` is less than `b`, swap them
* next compare `b` and `c` and swap them if `b` is greater than `c`
* continue this process through the entire length of the array
* start comparing from the beginning of the array again
* repeat until the entire array is sorted

### Selection Sort

Find the lowest value in an array and place it in the first position. Find the next smallest value and place it in the next position, so on and so forth until the entire array is sorted.

### Insertion Sort

Compare the value at index `1` to the value in index `0`. If `arr[0] > arr[1]` remove the value at index `1` and insert it into index `0`. Also move the value at index `0` into index `1`. Next move to the value at index `2` and compare it to the value in index `1` making the same comparison until you reach the index `0` again. Continue doing this comparison the entire length of the array. This algorithm run in `O(n²)`

### Merge Sort

Merge sort is a divide and conquer style algorithm. 

**procedure**

1. Define the function `mergeSort`
* create a base case `if (arr.length < 2) { return arr; }`
* Define a variable `middle` and set it to the approximate middle index of the array 
* split the array into two arrays at `middle` and call `mergeSort` recursively on each half
* call another function `merge` with the result
* `merge` will take the two arrays and return one sorted array

### Quick Sort

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

###### resources

* [https://www.youtube.com/watch?v=XE4VP_8Y0BU](https://www.youtube.com/watch?v=XE4VP_8Y0BU)
* [https://www.youtube.com/watch?v=Hoixgm4-P4M&t=160s](https://www.youtube.com/watch?v=Hoixgm4-P4M&t=160s)

### Counting Sort

Counting sort is a **distributed sort**. This algorithm is designed for sorting lists of numbers.

**procedure**

1. Find the range of the numbers and create an array based on that range
  * If the range of numbers is between `0 and 9` create an empty array with 9 indexes `0 - 9`
  * If the range of number is between `0 and 19` create an empty array with 20 indexes `0 - 19`
  * Follow the above pattern of rounding up to the nearest value of 10 based on the input 

### Bucket Sort

Bucket sort is also a distributed sorting algorithm. You put the values you're sorting into different buckets, then you sort the individual buckets using insertion sort.

**procedure** (incomplete)

1. create a `bucketSort` function which takes an arr and a bucketSize that defaults to 5. Bucket size is the max number of elements per bucket
* define the max and min value
* Use the following formula to find the number of buckets `Math.floor((max - min) / bucketSize) + 1` 
* Sort each bucket
* Join the elements together into a sorted array

## Searching

### Sequential Search

iterates through an array and looks for the value you are searching for. When it finds it, it returns the value, the index or true. If it doesn't find it, return something else like `false`

