# Bucket Sort

Bucket sort is also a distributed sorting algorithm. You put the values you're sorting into different buckets, then you sort the individual buckets using insertion sort.

**procedure** (incomplete)

1. create a `bucketSort` function which takes an arr and a bucketSize that defaults to 5. Bucket size is the max number of elements per bucket
* define the max and min value
* Use the following formula to find the number of buckets `Math.floor((max - min) / bucketSize) + 1` 
* Sort each bucket
* Join the elements together into a sorted array

