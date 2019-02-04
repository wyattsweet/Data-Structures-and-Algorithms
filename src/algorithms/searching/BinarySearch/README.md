# Binary Search

Given a sorted array, find a value `n` in the following way:

1. Find the middle index of the array and look at the value
* If `n` is greater than the value in the middle of the array, discard the first half of the array and the middle value.
* If `n` is less than the value in the middle of the array, discard the middle value and the top half of the array.
* If `n` is equal to the middle value, return it, you found the value you were looking for!
* If you only have 1 value in the array and it doesn't equal `n`, return `false` because the array did not contain the value you were looking for.
