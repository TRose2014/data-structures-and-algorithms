'use strict';

const repeatedWord = require('../repeated-word');

describe('repeatedWord\'s Description ', () => {

  describe('_split helper', () => {
    it('should split string into individual words and get rid of any puncuation', () => {
      let string = '!!!This is a test and only a test!!!';
      string = repeatedWord._split(string);

      expect(string).toStrictEqual(['This', 'is', 'a', 'test', 'and', 'only', 'a', 'test']);

    });
  });


  it('should return the only one word', () => {
    let string = 'hey yo hey';
    let result = repeatedWord.repeatedWord(string);
    expect(result).toBe('hey');
  });


  it('should return the first word that repeats more than once', () => {
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn\'t know what I was doing in New York...';
    let result = repeatedWord.repeatedWord(string);
    expect(result).toBe('summer');
  });

  it('should throw an error if a string is not provided', () => {
    let result = () => repeatedWord.repeatedWord(true);
    expect(result).toThrow();
  });

});