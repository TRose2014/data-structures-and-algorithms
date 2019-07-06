'use strict';

const HashTable =  require('../hashtable').HashTable;
const LinkedList =  require('../hashtable').LinkedList;

describe('dummy test', () => {
  it('should return true', () => {
    expect(true).toBeTruthy();
  });
});


describe('hashtable table', () => {
  it('should create an empty instance of a hashtable', () => {
    let hashTable;
    let expectedSize = 10;
    hashTable = new HashTable(expectedSize);
    expect(hashTable).toBeInstanceOf(HashTable);
    expect(hashTable.size).toBeDefined();
    expect(hashTable.size).toBe(expectedSize);
    expect(hashTable.buckets).toBeDefined();
    expect(hashTable.buckets.length).toBe(expectedSize);

    //Test default size

  });

  it('should return a default size', () => {
    let hashTable = new HashTable();
    expect(hashTable.size).toBe(0);

  });
});

describe('hash method', () => {
  it('should have the key cat to go to bucket 3 with a hash table containing 5 buckets', () => {
    let expectedHash = 3;
    let key = 'cat';
    let hashTable = new HashTable(5);

    let result = hashTable.hash(key);

    expect(result).toBe(expectedHash);
  });

  it('should have crepitate to go to bucket 4 with a hash table containing 5 buckets', () => {
    let expectedHash = 4;
    let key = 'crepitate';
    let hashTable = new HashTable(5);

    let result = hashTable.hash(key);

    expect(result).toBe(expectedHash);
  });

  it('should return the default size of a hashtable', () => {
    let hashTable = new HashTable();
    expect(hashTable.size).toBe(0);

  });

  //Pass in a key that is a non string
  //Pass in no key
});

// describe('add method', () => {
//   it('should throw an error if a key that is passsed is not a string', () => {
//     let hashTable = new HashTable(5);
//     let key = 5;

//     expect(hashTable.hash(key)).toThrow('Invalid key provided');

//   });
// });

describe('get method', () => {
  it('should return the correct value based on a key', () => {

  });
});


describe('get method', () => {
  it('should return null for keys that do not exist in the hashtable', () => {

  });
});


describe('collisions', () => {
  it('should succesfully handle any collisions within the hashtable', () => {

  });

  it('should successfully retrieve a value from a bucket that has a collision', () => {

  });
});


describe('contains method', () => {
  it('should successfully return true/false if a key is or inside the hashtable or not', () => {

  });
});

describe('hash method', () => {
  it('should returns an index in the collection', () => {

  });
});

