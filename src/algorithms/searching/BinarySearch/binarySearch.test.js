import test from 'ava';

import binarySearch from './index'

const arr = [5, 2, 78, 2, 89, 19, 3, 1]

test('returns value when it is in the array', t => {
  const res = binarySearch(arr, 19);
  t.is(res, 19);
});

test('returns false when the value is not in the array', t => {
  const res = binarySearch(arr, 7);
  t.is(res, false);
});
