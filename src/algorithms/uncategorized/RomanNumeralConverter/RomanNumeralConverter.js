class RomanNumeralConverter {
  getRomanNumValues = () => ({
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  })

  getSubtractives = () => ({
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  })

  toNumber = (romanNumeral) => {
    const romanNumVals = this.getRomanNumValues();
    const getSubtractives = this.getSubtractives();
    const values = romanNumeral.split('');

    for (let i = 0; i < values.length; i++) {
      const val = values[i];
      // check for subtractive value
      if (val === 'I' || val === 'X' || val === 'C') {

      }
    }
  }

  toRomanNumeral = () => {

  }
}

// 'IV' => 4
// 'II' => 2
// 'XXV' => 25
