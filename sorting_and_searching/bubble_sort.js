// time complexity O(n^2)

function bubbleSort(arr) {
  let swap = false

  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        const holder = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = holder;
      }
    }
  } while (swap)
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]))
