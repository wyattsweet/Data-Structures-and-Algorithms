const 

function binarySearch(arr, val) {
  // TODO: use linear search here
  const sortedArr = arr.sort();
  const middleInd = Math.floor(sortedArr.length / 2);

  if (val === sortedArr[middleInd]) {
    return sortedArr[middleInd];
  }
}
