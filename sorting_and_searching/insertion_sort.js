
// time complexity O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let x = i; x > 0; x--) {
      const currInd = x - 1;
      if (arr[currInd] > arr[x]) {
        arr.splice(x, 1);
        arr.splice(currInd, 0, arr[x]);
      }
    }
  }
  return arr;
}

console.log(insertionSort([3, 5, 1, 4, 2]));
