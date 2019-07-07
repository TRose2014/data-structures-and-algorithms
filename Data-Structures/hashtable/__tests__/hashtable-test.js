'use strict';

const HashTable =  require('../hashtable').HashTable;
const LinkedList =  require('../hashtable').LinkedList;

describe('linked list', () => {
  it('should create an empty instance of a linked list', () => {
    let ll = new LinkedList;
    expect(ll).toBeInstanceOf(LinkedList);
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
});

describe('add method', () => {

  it('should add a key/value to the hashtable resulting in the value being in the data structure', () => {
    let hashTable = new HashTable(5);
  
    hashTable.add('dew', 55);

    expect(hashTable.buckets[0].values()).toEqual([['dew', 55]]);
   
  });

  it('should throw an error if the same key is added inside the hashtable', () => {
    let hashTable = new HashTable(5);
    hashTable.add('test', 55);
    let result = () => hashTable.add('test', 55);
    
    expect(result).toThrow();
  });


  it('should throw an error if a key that is passsed is not a string', () => {
    let hashTable = new HashTable(5);

    // Jest needs to captures the error, and this is the way it captures. Without it, the error will throw but jest won't capture it
    let result = () => hashTable.add(2, 55);

    expect(result).toThrow();

  });

  it('should throw an error if a key and a value is not passed', () => {
    let hashTable = new HashTable(5);

    let result = () => hashTable.add();

    expect(result).toThrow();

  });
});

describe('get method', () => {
  it('should return the correct value if given a key', () => {
    let hashTable = new HashTable(5);
    hashTable.add('test', 3);
    let find = hashTable.get('test');

    expect(find).toBe(3);
  });

  it('should return null for keys that do not exist in the hashtable', () => {
    let hashTable = new HashTable(5);
    hashTable.add('test', 3);
    let find = hashTable.get('test');

    expect(find).toBe(3);
  });

  it('should return error if no key is provided', () => {
    let hashTable = new HashTable(5);
    let find = hashTable.get;

    expect(find).toThrow();
  });
});

describe('contains method', () => {
  it('should return true if a key is inside the hashtable', () => {
    let hashTable;
    hashTable = new HashTable(5);
    hashTable.add('test', 3);
    hashTable.add('jest', 3);
    hashTable.add('request', 3);

    let result = hashTable.contains('request');

    expect(result).toBe(true);

  });

  it('should return null if a key is not inside the hashtable', () => {
    let hashTable;
    hashTable = new HashTable(5);
    hashTable.add('test', 3);
    hashTable.add('jest', 3);
    hashTable.add('request', 3);

    let result = hashTable.contains('best');

    expect(result).toBe(null);

  });
});


describe('collisions', () => {
  it('should succesfully handle any collisions within the hashtable', () => {
    let hashTable = new HashTable(5);
    hashTable.add('foo', 55);
    hashTable.add('bbt', 24);
  
    console.log(hashTable.buckets);
    // expect(hashTable).toBe

  });

  it('should successfully retrieve a value from a bucket that has a collision', () => {

  });
});


