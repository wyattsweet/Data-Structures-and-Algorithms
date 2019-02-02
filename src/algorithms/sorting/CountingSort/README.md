# Counting Sort

Counting sort is a **distributed sort**. This algorithm is designed for sorting lists of numbers.

**procedure**

1. Find the range of the numbers and create an array based on that range
  * If the range of numbers is between `0 and 9` create an empty array with 9 indexes `0 - 9`
  * If the range of number is between `0 and 19` create an empty array with 20 indexes `0 - 19`
  * Follow the above pattern of rounding up to the nearest value of 10 based on the input 
