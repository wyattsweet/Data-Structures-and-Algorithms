function isPalindrome(word) {
  if (!(typeof word === 'string')) {
    return false;
  }

  const lastInd = word.length - 1;
  for (let i = 0; i < Math.ceil(word.length / 2); i++) {
    if (word.charAt(i) !== word.charAt(lastInd - i)) {
      return false;
    }
  }

  return true;
}
