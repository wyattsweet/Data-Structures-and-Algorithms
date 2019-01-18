function sequentialSearch(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return arr[i];
      break;
    }
  }
  return false;
}

console.log(sequentialSearch([5, 3, 6, 1, 3], 3))
