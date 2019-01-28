import test from 'ava';

import findSumOf10 from './solution'

test('finds the correct number of pairs', t => {
  const res1 = findSumOf10([2, 5, 3, 8, 5])
  t.is(res1, 2);

  const res2 = findSumOf10([5, 5, 5, 5, 5, 5])
  t.is(res2, 3);

  const res3 = findSumOf10([1, 2, 3, 2, 1])
  t.is(res3, 0);

  const res4 = findSumOf10([-10, 20, 11, -1, 30, -20])
  t.is(res4, 3);
})
