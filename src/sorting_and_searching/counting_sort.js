function countingSort(origArr) {
  const arr = origArr.slice();
  const max = Math.max(...arr);
  const countArr = Array(max + 1).fill(0);
  const orderedArr = Array(arr.length - 1);

  arr.forEach(num => {
    countArr[num] += 1;
  });

  for (let i = 0; i < countArr.length - 1; i++) {
    countArr[i + 1] = countArr[i] + countArr[i +  1];
  }

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const place = countArr[val];
    orderedArr[place - 1] = val;
    countArr[val] -= 1;
  }

  return orderedArr;
}

console.log(countingSort([344, 212, 566, 234]));
