import test from 'ava';

import fizzBuzz from './solution';

test('should return the correct output', t => {
  const res = fizzBuzz(10);
  t.is(res, '1 2 fizz 4 buzz fizz 7 8 fizz buzz');
});

test('nothing', t => {
  const res = fizzBuzz();
  t.is(res, '');
})
