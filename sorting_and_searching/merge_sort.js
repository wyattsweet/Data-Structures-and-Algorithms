
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const arrA = mergeSort(arr.slice(0, middle));
  const arrB = mergeSort(arr.slice(middle));
  return merge(arrA, arrB);
}

function merge(arrA, arrB) {
  let result = [];
  let aInd = 0;
  let bInd = 0;

  while (aInd < arrA.length && bInd < arrB.length) {
    if (arrA[aInd] <= arrB[bInd]) {
      result.push(arrA[aInd]) 
      aInd += 1;
    } 
    if (arrB[bInd] < arrA[aInd]) {
      result.push(arrB[bInd]);
      bInd += 1;
    }
  }

  if (aInd < arrA.length) {
    result = [...result, ...arrA.slice(aInd)];
  }

  if (bInd < arrB.length) {
    result = [...result, ...arrB.slice(bInd)];
  }

  return result;
}

console.log(mergeSort([2, 8, 5, 3, 9, 4, 1, 7]))
