'use strict';

const leftJoin = require('../left-join');
const HashTable = require('../../hashtable/hashtable').HashTable;

let HT1;
let HT2;

beforeEach(()=> {
  HT1 = new HashTable(5);
  HT1.add('sad', 'depressed');
  HT1.add('tired', 'sleepy');
  HT1.add('go', 'start');
  HT1.add('stop', 'halt');



  HT2 = new HashTable(5);
  HT2.add('tired', 'awake');
  HT2.add('stop');
  HT2.add('sad', 'happy');
  HT2.add('silly', 'serious');

});


describe('left join function', () => {
  it('should only accept hashtables as its parameters', () => {
    let test = true;
    let number = 3;
    let result = () => (leftJoin(test, number));
  
    expect(result).toThrow();
  });

  it('should return the left join of two hashtables', () => {
    let result = [ 
      [ 'go', 'start', undefined ],
      [ 'sad', 'depressed', 'happy' ],
      [ 'tired', 'sleepy', 'awake' ],
    ];

    expect(leftJoin(HT1, HT2)).toEqual(result);

  });
});
