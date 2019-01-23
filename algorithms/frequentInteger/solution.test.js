import test from 'ava';

import frequentInteger from './solution';

test('returns most frequent integer in a array', t => {
  const res = frequentInteger([1, 2, 4, 1, 2, 1]);
  t.is(res, 1);
})

test('returns null when you pass it nothing', t => {
  const res = frequentInteger();
  t.is(res, null);
})

test('return one value when array only has one value', t => {
  const res = frequentInteger([4]);
  t.is(res, 4);
})
