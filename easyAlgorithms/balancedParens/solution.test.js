import test from 'ava';

import balancedParens from './solution'

test('returns true when parens are balanced', t => {
  const response = balancedParens('when(will(we leave (earth) on a ((space ship))))')
  t.true(response);
});

test('returns false when parens are unbalanced', t => {
  const response = balancedParens('when(will(we leave (earth) on a ((space ship))')
  t.false(response);
})

test('returns true', t => {
  const response = balancedParens('()');
  t.true(response);
})

test('returns false when input is not a string', t => {
  const response = balancedParens(true);
  t.false(response);
})
