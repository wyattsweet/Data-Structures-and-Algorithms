import test from 'ava'

import { sentenceReversalVer1, sentenceReversalVer2, sentenceReversalVer3 } from './index'

// sentence reversal 1
test('reverses sentence without punctuation or capitalization', t => {
  const res = sentenceReversalVer1('This is a sentence, what do you think?');
  t.is(res, 'think you do what sentence a is this');
});

// sentence reversal 2
test('reverse sentence and capitalize the first word', t => {
  const res = sentenceReversalVer2('This is a sentence, what do you do!')
  t.is(res, 'Do you do what sentence a is this');
})

test('reverse the sentence but keep punctuation in place', t => {
  const res = sentenceReversalVer3('This is a sentence, what do you think?');
  t.is(res, 'Think you do what, sentence a is this?');
})
