function findArrIndex(max) {
  const ceil = max / 10;
  return Number.isInteger(ceil) ? max + 9 : Math.ceil(ceil) * 10 - 1;
}

function countingSort(arr) {
  const max = Math.max(...arr);
  console.log(findArrIndex(max));
}

countingSort([100]);
