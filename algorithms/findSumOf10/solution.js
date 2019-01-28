function findSumOf10(arr) {
  const foundNums = new Set();
  let numOfMatches = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = 10 - arr[i];
    if (foundNums.has(diff)) {
      numOfMatches++;
      foundNums.delete(diff);
    } else {
      foundNums.add(num);
    }
  }
  return numOfMatches;
}

module.exports = findSumOf10
