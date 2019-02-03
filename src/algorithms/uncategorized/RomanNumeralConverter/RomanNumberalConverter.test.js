import test from 'ava';
import RomanNumberalConverter from './index';

const rnc = new RomanNumberalConverter();

const toNumber = val => rnc.toNumber(val)
const toRomanNumeral = num => rnc.toRomanNumeral(num)

// toNumber
test('III return 3', t => {
  t.is(toNumber('III'), 3);
});

test('IV return 4', t => {
  t.is(toNumber('IV'), 4);
})

test('XIX returns 19', t => {
  t.is(toNumber('XIX'), 19);
})

test('XXV returns 25', t => {
  t.is(toNumber('XXV'), 25);
})


// toRomanNumeral
test('13 returns XIII', t => {
  t.is(toRomanNumeral(13), 'XIII')
})

test('5 returns V', t => {
  t.is(toRomanNumeral(5), 'V');
})

test('2 returns II', t => {
  t.is(toRomanNumeral(2), 'II');
})

test('4 returns IV', t => {
  t.is(toRomanNumeral(4), 'IV')
})
