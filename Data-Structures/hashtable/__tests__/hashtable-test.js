'use strict';

const HashTable =  require('../hashtable').HashTable;
const LinkedList =  require('../hashtable').LinkedList;

describe('dummy test', () => {
  it('should return true', () => {
    expect(true).toBeTruthy();
  });
});


beforeEach(() => {
  // hastable
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

  it('should successfully hash a key to an in-range value', () => {

  });
});

describe('hash method', () => {
  it('should has cat to 3 with 5 buckets', () => {
    let expectedHash = 3;
    let key = 'cat';
    let hashTable = new HashTable(5);

    let result = hashTable.hash(key);

    expect(result).toBe(expectedHash);
  });

  it('should has foo to 1 with 5 buckets', () => {
    let expectedHash = 1;
    let key = 'foo';
    let hashTable = new HashTable(5);

    let result = hashTable.hash(key);

    expect(result).toBe(expectedHash);
  });

  //Pass in a key that is a non string
  //Pass in no key
});

describe('add method', () => {
  it('should add a key/value to the hashtable', () => {

  });
});

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

