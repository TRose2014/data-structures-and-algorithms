'use strict';

const binarySearch = require('../array-binary-search');

describe('Array Binary Search', () => {

  it('should return -1 if target is not in the array', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });

  it('should return the index number if target has been found in array', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });
});