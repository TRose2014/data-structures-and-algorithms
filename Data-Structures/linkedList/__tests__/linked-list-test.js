'use strict';


const LinkedList = require('../linked-list');

describe('Testing with Linkedlist ', () => {

  it('should create a linked list with head pointing to null', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('should return the value of the new node and the head should no longer be null', () => {
    let list = new LinkedList();
    list.insert(9);
    expect(list.head.value === 9);
  });

  it('should return true if the value is in the list, if not return false', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(8);
    list.insert(4);
    console.log(list.includes(8));
    expect(list.includes(8).toEqual(true));
    expect(list.includes(6).toEqual(false));
  });
});
