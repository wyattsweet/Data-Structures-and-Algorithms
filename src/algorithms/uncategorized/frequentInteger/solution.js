function frequentInteger(arr) {
  if (!arr) {
    return null;
  }

  if (arr.length < 2) {
    return arr[0];
  }
  const values = {};
  for (let i = 0; i < arr.length; i++) {
    if (values[arr[i]]) {
      values[arr[i]]++;
    } else {
      values[arr[i]] = 1;
    }
  }

  const max = Math.max(...Object.values(values));
  return Number(Object.keys(values).find(el => values[el] === max));
}

module.exports = frequentInteger;
