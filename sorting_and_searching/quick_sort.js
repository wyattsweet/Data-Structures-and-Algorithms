function quickSort(origArr) {
  if (origArr.length <= 1) {
    return origArr;
  }
  const arr = origArr.slice();
  const pivot = arr.pop();
  const left = [];
  const right = [];
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
  
  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return [...leftSorted, ...center, ...rightSorted];
}

console.log(quickSort([4, 6, 1, 7, 2, 3]));
