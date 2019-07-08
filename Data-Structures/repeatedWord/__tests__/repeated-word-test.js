'use strict';

const repeatedWord = require('../repeated-word');

describe('repeatedWord\'s Description ', () => {

  describe('_split helper', () => {
    it('should split string into individual words', () => {
      let string = 'Hello!! Good Morning.';
      string = repeatedWord._split(string);

      expect(string).toStrictEqual(['Hello', 'Good', 'Morning']);

    });
  });


  it('should return the only word available', () => {
    let string = 'a a';
    let result = repeatedWord.repeatedWord(string);
    expect(result).toBe('a');
  });

  it('should return the only word available', () => {
    let string = 'a a';
    let result = repeatedWord.repeatedWord(string);
    expect(result).toBe('a');
  });


  it('should return the only word available', () => {
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn\'t know what I was doing in New York...';
    let result = repeatedWord.repeatedWord(string);
    expect(result).toBe('summer');
  });

});