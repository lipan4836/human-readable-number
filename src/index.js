module.exports = function toReadable(number) {
  let tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  let singles = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: "four",
    5: 'five',
    6: 'six',
    7: "seven",
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    19: 'nineteen',
    18: 'eighteen',
  };
  const num = String(number).split('');
  if (20 <= number) {
    if (num.length === 2)
      if (number % 10 == 0) {
        return tens[number];
      } else {
        for (i = 2; i < 10; i++) {
          if (num[0] == i) return tens[`${i}0`] + ' ' + singles[num[1]];
        }
      }
        if (num.length === 3)
          if (number % 100 != 0) {
            if (number % 10 === 0)
              if (num[1] != 2) {
                if (num[1] != 3) {
                  for (i = 4; i < 10; i++) {
                    if (num[1] == i) return singles[parseInt(num[0])] + ' hundred ' + tens[`${i}0`];
                  }
                } else {
                  return singles[parseInt(num[0])] + ' hundred ' + tens[30];
                }
              } else {
                return singles[parseInt(num[0])] + ' hundred ' + tens[20];
              }
              if (num[1] == 0) {
                return singles[parseInt(num[0])] + ' hundred ' + singles[num[2]];
              }
              if (num[1] == 1) {
                for (i = 0; i < 10; i++) {
                  if (num[2] == i) return singles[parseInt(num[0])] + ' hundred ' + singles[`1${i}`];
                }
              }
              for (i = 2; i < 10; i++) {
                if (num[1] == i) {
                  return singles[parseInt(num[0])] + ' hundred ' + tens[`${i}0`] + ' ' + singles[num[2]];
                }
              }
              
            } else {
              return singles[parseInt(num[0])] + ' hundred';
            }
  } else {
    return singles[number];
  }
}
