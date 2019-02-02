// time complexity O(n^2)

function bubbleSort(arr) {

  for (let x = 0; x < arr.length; x++) {
    for (let i = 0; i < arr.length - 1 - x; i++) {
      if (arr[i] > arr[i + 1]) {
        const holder = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = holder;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]))
