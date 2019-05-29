'use strict';

const insertShiftArray = require('../array-shift');

describe('Shifting Array', () => {

  it('should return a new array with the new value inserted in the middle', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });

  it('should only take an integer', () => {
    expect(insertShiftArray([4,8,15,23,42], 'Hello')).toBeNull();
  });
});