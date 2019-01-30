class RomanNumeralConverter {
  getRomanNumValues() {
    return {
      'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
  }

  getSubtractives() {
    return {
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
    }
  }

  getSubVal() {

  }

  toNumber(romanNumeral) {
    const romanNumMap = this.getRomanNumValues();
    const subValMap = this.getSubtractives();
    const romNumArr = romanNumeral.split('');

    for (let i = 0; i < romNumArr.length; i++) {
      let romVal = romNumArr[i];
      let numVal = romanNumMap[romVal];
      let deleteAmount = 1;
      // check for subtractive value
      if (romVal === 'I' || romVal === 'X' || romVal === 'C') {
        const potentialSubVal = `${romVal}${romNumArr[i + 1]}`  
        const subVal = subValMap[potentialSubVal]
        if(subVal) {
          romVal = potentialSubVal;
          numVal = subVal;
          deleteAmount = 2;
        }
      }
      romNumArr.splice(i, deleteAmount, numVal);
    }
    return romNumArr.reduce((acc, val) => acc + val);
  }

  // toRomanNumeral() {}
}

const rnc = new RomanNumeralConverter();
console.log(rnc.toNumber('DCC'))

// 'IV' => ['IV']
// 'XIX' => ['X', 'IX']
// 'II' => 2
// 'XXV' => 25
