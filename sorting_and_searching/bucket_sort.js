const insertionSort = require('./insertion_sort')

function bucketSort(arr, bucketSize = 2) { // bucketSize is the max number of values per bucket
  if (arr.length < 2) {
    return arr;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucketCount = Math.floor((max - min) / bucketSize) + 1; // The number of buckets 
  const buckets = Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  arr.forEach(val => {
    const bucketInd = Math.floor((val - min) / bucketSize);
    buckets[bucketInd].push(val);
  })

  let sorted = [];
  //
  // sort the buckets
  for (let i = 0; i < buckets.length; i++) {
    sorted = [...sorted, ...insertionSort(buckets[i])];
  }

  return sorted;

}

console.log(bucketSort([5, 4, 3, 2, 1, 0]))
