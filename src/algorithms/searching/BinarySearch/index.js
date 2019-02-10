const quickSort = require('../../sorting/QuickSort');

function binarySearch(arr, val) {
  if (arr.length === 1) {
    return arr[0] === val ? arr[0] : false;
  }
  const sortedArr = quickSort(arr);
  console.log(sortedArr);
  const middleInd = Math.floor(sortedArr.length / 2);
  const middleVal = sortedArr[middleInd];

  if (val === middleVal) {
    return middleVal;
  }

  if (val < middleVal) {
    return binarySearch(sortedArr.slice(0, middleInd), val);
  }

  if (val > middleVal) {
    return binarySearch(sortedArr.slice(middleInd + 1), val)
  }
}

module.exports = binarySearch
