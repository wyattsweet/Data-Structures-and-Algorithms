
// time complexity O(n^2)

function insertionSort(origArr) {
  const arr = origArr.slice();
  for (let i = 1; i < arr.length; i++) {
    for (let x = i; x > 0; x--) {
      const currInd = x - 1;
      if (arr[currInd] > arr[x]) {
        const temp = arr.splice(x, 1)[0];
        arr.splice(currInd, 0, temp);
      }
    }
  }
  return arr;
}

module.exports = insertionSort
