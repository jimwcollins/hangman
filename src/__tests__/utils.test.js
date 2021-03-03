const { formatPhrase, checkPhrase, filterPhrases } = require('../utils/utils');

describe('Test formatPhrase()', () => {
  it('should return empty array for blank string', () => {
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

  it('should handle complex phrase', () => {
    const inputPhrase = "Rosemary's Baby: Sequel!";
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

describe.only('Test filterPhrases()', () => {
  it('should return empty array for empty array', () => {
    const inputArray = [];
    const expectedOutput = [];
    const actualOutput = filterPhrases(inputArray);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return same array for one phrase without number', () => {
    const inputArray = ['Die Hard'];
    const expectedOutput = ['Die Hard'];
    const actualOutput = filterPhrases(inputArray);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return same array of two phrases without number', () => {
    const inputArray = ['Die Hard', 'Die Hard With A Vengeance'];
    const expectedOutput = ['Die Hard', 'Die Hard With A Vengeance'];
    const actualOutput = filterPhrases(inputArray);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should filter out phrase with number', () => {
    const inputArray = ['Die Hard', 'Die Hard 2', 'Die Hard With A Vengeance'];
    const expectedOutput = ['Die Hard', 'Die Hard With A Vengeance'];
    const actualOutput = filterPhrases(inputArray);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should filter out two phrases with numbers', () => {
    const inputArray = [
      'Die Hard',
      'Die Hard 2',
      'Die Hard With A Vengeance',
      '28 Days Later',
    ];
    const expectedOutput = ['Die Hard', 'Die Hard With A Vengeance'];
    const actualOutput = filterPhrases(inputArray);
    console.log(actualOutput);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe('Test checkPhrase()', () => {
  it('should reject empty string', () => {
    const inputPhrase = '';
    const expectedOutput = false;
    const actualOutput = checkPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should pass single word', () => {
    const inputPhrase = 'Test';
    const expectedOutput = true;
    const actualOutput = checkPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should pass phrase', () => {
    const inputPhrase = 'Test Phrase';
    const expectedOutput = true;
    const actualOutput = checkPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should reject phrase with number', () => {
    const inputPhrase = 'Test Phrase 2';
    const expectedOutput = false;
    const actualOutput = checkPhrase(inputPhrase);
    console.log(actualOutput);
    expect(actualOutput).toBe(expectedOutput);

    const inputPhrase2 = '28 Days Later';
    const expectedOutput2 = false;
    const actualOutput2 = checkPhrase(inputPhrase2);
    console.log(actualOutput2);
    expect(actualOutput2).toBe(expectedOutput2);
  });
});
