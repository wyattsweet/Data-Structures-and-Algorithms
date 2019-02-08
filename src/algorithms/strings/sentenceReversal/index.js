const characters = [',', '.', '!', '?', ';'];

function sentenceReversalVer1(sentence) {
  const sentenceArr = sentence.split(' ');
  const revSentence = sentenceArr.reverse();
  return revSentence.map(word => {
    const lastInd = word.length - 1;
    const finalCharacter = word.substring(lastInd);
    if(characters.includes(finalCharacter)) {
      return word.substring(0, lastInd).toLowerCase();
    }
    return word.toLowerCase();
  }).join(' ');
}

function sentenceReversalVer2(sentence) {
  const sentenceRev = sentenceReversalVer1(sentence);
  const firstLetter = sentenceRev.charAt(0);
  return `${firstLetter.toUpperCase()}${sentenceRev.substring(1)}`;
}

function sentenceReversalVer3(sentence) {
  const punctuations = [];
  const sentRev = sentenceReversalVer2(sentence).split(' ');

  // collecting punctuations
  sentence.split(' ').forEach((word, i) => {
    const lastChar = word.charAt(word.length - 1);
    if (characters.includes(lastChar)) {
      punctuations.push([i, lastChar]);
    }
  });

  // add in punctuations
  punctuations.forEach((punc) => {
    const puncInd = punc[0];
    const puncVal = punc[1];
    sentRev[puncInd] = `${sentRev[puncInd]}${puncVal}`;
  })

  return sentRev.join(' ');
}

module.exports = {
  sentenceReversalVer1,
  sentenceReversalVer2,
  sentenceReversalVer3
}
