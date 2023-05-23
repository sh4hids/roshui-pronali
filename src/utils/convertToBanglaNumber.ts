export const convertToBanglaNumber = (n: number): string => {
  const numbers: { [key: number]: string } = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
  };
  let result = '';

  if (!n) {
    return '';
  }

  const input = n.toString();
  const { length } = input;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    if (input[i] === '.' || input[i] === '-') {
      result += input[i];
    } else {
      result += numbers[+input[i]];
    }
  }
  return result;
};
