'use strict';

'use strict';

const quickSortFunction = require('../quickSort');
const quickSort = quickSortFunction.quickSort;

describe('quickSort\'s Description ', () => {

  let array;

  beforeEach(() => {
    array = [9, 10, 12, 8, 7];
  });

  it('should sort', () => {
    let newArray = quickSort(array, 0, array.length - 1);
    console.log(newArray);
    expect(newArray[0]).toBe(7);
    expect(newArray[1]).toBe(8);
    expect(newArray[2]).toBe(9);
    expect(newArray[3]).toBe(10);
    expect(newArray[4]).toBe(12);
  });

  it('should throw an error if an element is not number or cant be coerced into a number', () => {
    array = [9, 8, 'Hello!!!'];
    expect(() => {
      quickSort(array, 0, array.length - 1)(array).toThrow();
    });
  });

  it('should throw an error if the arg is not an array', () => {
    let string = 'Hello!!!';
    expect(() => {
      quickSort(array, 0, array.length - 1)(string).toThrow();
    });
  });



});