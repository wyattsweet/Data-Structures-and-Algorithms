# Interpolation Search

Interpolation search is an optimized version of binary search. Instead of always checking the middle index, you check a position based on the value you're searching for and a couple other factors. There are a number of different formulas you can use for figuring out the middle index.

The most common value for finding the position is 

```
pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]

arr[] ==> Array where elements need to be searched
x     ==> Element to be searched
lo    ==> Starting index in arr[]
hi    ==> Ending index in arr[]
```

Once you find the position you want to check if `arr[pos] === x` and return it if it does

if `x < arr[pos]` move the right index down. If `x > arr[pos]` move the left index up

###### Resources

* [https://www.geeksforgeeks.org/interpolation-search/](https://www.geeksforgeeks.org/interpolation-search/)
* [https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/interpolation-search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/interpolation-search)
