function quickSort(origArr) {
  if (origArr.length <= 1) {
    return origArr;
  }
  // copy the original array as to not mutate the input
  const arr = origArr.slice();
  // grab the last element as the pivot
  const pivot = arr.pop();
  // for values lower than the pivot
  const left = [];
  // for values greater than the pivot
  const right = [];
  // for the pivot and all values equal to it
  const center = [pivot];

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val < pivot) {
      left.push(val);
    }

    if (val > pivot) {
      right.push(val);
    }

    if (val === pivot) {
      center.push(val);
    }
  }
  
  // call quickSort again with the greater and less than partitions
  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return [...leftSorted, ...center, ...rightSorted];
}

module.exports = quickSort;
