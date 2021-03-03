const { formatPhrase } = require('../utils/utils');

describe('Test formatPhrase()', () => {
  it('should return empty array for empty string', () => {
    const inputPhrase = '';
    const expectedOutput = [];
    const actualOutput = formatPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return single word, uppercased and split into array', () => {
    const inputPhrase = 'Alien';
    const expectedOutput = ['A', 'L', 'I', 'E', 'N'];
    const actualOutput = formatPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should handle two words correctly', () => {
    const inputPhrase = 'The Shining';
    const expectedOutput = [
      'T',
      'H',
      'E',
      ' ',
      'S',
      'H',
      'I',
      'N',
      'I',
      'N',
      'G',
    ];
    const actualOutput = formatPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should strip out non-letter characters', () => {
    const inputPhrase = "Rosemary's Baby";
    const expectedOutput = [
      'R',
      'O',
      'S',
      'E',
      'M',
      'A',
      'R',
      'Y',
      'S',
      ' ',
      'B',
      'A',
      'B',
      'Y',
    ];
    const actualOutput = formatPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should allow numbers', () => {
    const inputPhrase = "Rosemary's Baby 2";
    const expectedOutput = [
      'R',
      'O',
      'S',
      'E',
      'M',
      'A',
      'R',
      'Y',
      'S',
      ' ',
      'B',
      'A',
      'B',
      'Y',
      ' ',
      '2',
    ];
    const actualOutput = formatPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should handle complex phrase', () => {
    const inputPhrase = "Rosemary's Baby 2: Sequel!";
    const expectedOutput = [
      'R',
      'O',
      'S',
      'E',
      'M',
      'A',
      'R',
      'Y',
      'S',
      ' ',
      'B',
      'A',
      'B',
      'Y',
      ' ',
      '2',
      ' ',
      'S',
      'E',
      'Q',
      'U',
      'E',
      'L',
    ];
    const actualOutput = formatPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
