// time complexity: O(n^2)

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = arr[i];
    let smallestInd = i;
    for (let x = i; x < arr.length; x++) {
      if (arr[x] < smallest) {
        smallest = arr[x];
        smallestInd = x;
      }
    }
    arr.splice(smallestInd, 1);
    arr.splice(i, 0, smallest);
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
