function euclid(a, b) {
  if (a < 0) { a *= -1; }
  if (b < 0) { b *= -1; }

  while (b > 0) {
    [a, b] = [b, a % b]
  }
  return a;
}

console.log(euclid(52, 78))
