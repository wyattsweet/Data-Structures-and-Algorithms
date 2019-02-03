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

  // TODO: return false for invalid roman numerals
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

  findQuotientAndRemainder(baseVal, num) {
    const remainder = num % baseVal;
    const quotient = Math.floor(num / baseVal);
    return [quotient, remainder];
  }

  getNumToRomanNums() {
    return {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',

    }
  }

  toRomanNumeral(number) {
    const romanValues = this.getNumToRomanNums();
    const baseValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = '';
    let currNum = number;

    while(currNum !== 0) {
      for (let i = 0; i < baseValues.length; i++) {
        const baseValue = baseValues[i];
        if (currNum >= baseValue) {
          const [ quotient, remaining ] = this.findQuotientAndRemainder(baseValue, currNum);
          // debugger
          romanNumeral = `${romanNumeral}${romanValues[baseValue].repeat(quotient)}`;
          currNum = remaining;
          break;
        }
      }
    }
    return romanNumeral;
  }
}

const rnc = new RomanNumeralConverter();
console.log(rnc.toRomanNumeral(700))


module.exports = RomanNumeralConverter;
