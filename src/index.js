module.exports = function toReadable (number) {
  const singles = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'    
  ]
  const tens = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ]
  const hundreds = [
    'zero',
    'one hundred',
    'two hunder',
    'three hunder',
    'four hunder',
    'five hunder',
    'six hunder',
    'seven hunder',
    'eight hunder',
    'nine hunder',
  ]

  let i
  let result = []
  if (number < 20) {
    for (i = 0; i < numberString.length; i++) {
      if (numberString[i] == number) return singles[i]
    }
  } else if (number >= 20) {
    if (number % 10 == 0) {
      for (i = 0; i < 9; i++) {
        if (numberString[0] == (number / 10)) {
          return tens[i]
        }
      }
    }
    // if (numberString.length == 2) {
    //   for (i = 0; i < 9; i++) {
    //     if (numberString[0] == i) {
    //       result[0] = tens[i]
    //     }
    //     if (numberString[1] == i) {
    //       result[1] = singles[i]
    //     }
    //     return result.join(' ')
    //   }
    // }
  }
}
