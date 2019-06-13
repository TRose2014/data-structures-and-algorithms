'use strict';

bracketValidation = require('../multi-bracket-validation');


describe('Multi-Bracket Validation', () => {
  it('should return false if length of string is an odd number', () => {
    expect(string.length % 2 === 0).toBe(false);

  })

  it('should return true if an opening bracket is immediately followed by a same closing bracket', () => {
    expect('()').toBe(true);

  })

  
  it('should return false if an opening bracket is immediately followed by a different cloding bracket', () => {
    expect('(]').toBe(false);
  })
  
  it('should return true if 3 opening brackets is immediately followed by 3 same closing brackets', () => {
    expect('((()))').toBe(true);
  })
  

  it('should return false if 2 opening brackets is immediately followed by 1 same brack and 1 different bracket', () => {
    expect('((()])').toBe(false);
  })

  it('should return true if an opening brackets is immediately followed by a same closing brackets with text in the middle', () => {
    expect('(string)').toBe(true);
  })

})