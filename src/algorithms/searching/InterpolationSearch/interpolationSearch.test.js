import test from 'ava';

import interpolationSearch from './index';

test('returns the correct index when the value is in the array', t => {
  const res = interpolationSearch([1, 2, 3, 4, 5, 6, 7, 8], 4);
  t.is(res, 3);
});

test('returns -1 when the value is not in the array', t => {
  const res = interpolationSearch([1, 2, 3, 4, 5, 6, 7, 8], 10);
  t.is(res, -1);
});
