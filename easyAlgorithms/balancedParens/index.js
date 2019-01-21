function balancedParens(string) {
  if (!(typeof string === 'string')) {
    return false;
  }

  let parensCount = 0;
  for (let i = 0; i < string.length; i++) {
    char = string.charAt(i);
    if (char === '(') {
      parensCount++;
    }
    if (char === ')') {
      parensCount--;
    }

  }
  return parensCount === 0 ? true : false;
}
