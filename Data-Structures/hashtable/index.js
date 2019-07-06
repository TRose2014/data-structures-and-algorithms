'use strict';

const HashTable = require('./hashtable').HashTable;

module.exports = HashTable;

let hashTable = new HashTable(5);

hashTable.add('cat', 42);
hashTable.add('foo', 55);
hashTable.add('crepitate', 24);
hashTable.print();