function interpolationSearch(arr, value) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex) {
    const rangeDelta = arr[rightIndex] - arr[leftIndex];
    const valueDelta = value - arr[leftIndex];
    const indDelta = rightIndex - leftIndex;

    const position = Math.floor(leftIndex + (valueDelta * indDelta) / valueDelta);

    if (value === arr[position]) {
      return position;
    }

    if (value > arr[position]) {
      leftIndex = position + 1;
    }

    if (value < arr[position]) {
      rightIndex = position - 1;
    }
  }
  return -1;
}

module.exports = interpolationSearch;
