'use strict';


const LinkedList = require('../linked-list');

let list;

describe('Testing with Linkedlist ', () => {

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should create a linked list with head pointing to null', () => {
    expect(list.head).toEqual(null);
  });

  it('should return the value of the new node and the head should no longer be null', () => {
    list.insert(9);
    expect(list.head.value === 9);
  });

  it('should return true if the value is in the list, if not return false', () => {
    list.insert(2);
    list.insert(8);
    list.insert(4);
    expect(list.includes(8)).toEqual(true);
    expect(list.includes(6)).toEqual(false);
  });

  //Day 6 Code Challenge

  describe('append function', () => {
    it('should add new node to the end of the linked list', () => {
      list.insert(2);
      list.append(9);
      expect(list.head.next.value).toEqual(9);
    });

    it('should add multiple node to the end of the linked list', () => {
      list.insert(2);
      list.append(12);
      list.append(19);
      expect(list.head.next.value).toEqual(12);
      expect(list.head.next.next.value).toEqual(19);
    });
  });

  describe('insert before function', () => {
    it('should add new node in the middle of the linked list before the given newValue parameter', () => {
      list.insert(4);
      list.append(8);
      list.append(2);
      list.append(12);
      list.insertBefore(2, 3);
      expect(list.head.next.next.value).toEqual(3);
    });

    it('should add new node of the linked list before the first node', () => {
      list.insert(4);
      list.append(8);
      list.append(2);
      list.insertBefore(4, 1);
      expect(list.head.value).toEqual(1);
    });
  });

  describe('insert after function', () => {
    it('should add new node in the middle of the linked list after the given newValue parameter', () => {
      list.insert(7);
      list.append(5);
      list.append(9);
      list.append(14);
      list.insertAfter(9, 2);
      expect(list.head.next.next.next.value).toEqual(2);
    });

    it('should add new node in the last node of the linked list after the given newValue parameter', () => {
      list.insert(7);
      list.append(5);
      list.append(9);
      list.append(14);
      list.insertAfter(14, 3);
      expect(list.head.next.next.next.next.value).toEqual(3);
    });
  });
  //Class Seven
  describe('fromEnd()', () => {

    it('Where k is greater than the length of the linked list ', () => {
      // list.insert(1);
      // list.insert(2);
      // list.insert(3);
      // list.insert(4);

      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node = {value: 1, next: node2};

      list.head = node;


      expect(() => {
        list.fromEnd(5);
      }).toThrow();
    });

    it('Where k and the length of the list are the same', () => {
      let node = {value: 1, next: null};
      list.head = node;

      expect(() => {
        list.fromEnd(4);
      }).toThrow();
    });

    it('Where k is not a positive integer', () => {
      // let node4 = {value: 1, next: null};
      // let node3 = {value: 2, next: node4};
      // let node2 = {value: 3, next: node3};
      // let node = {value: 4, next: node2};

      // list.head = node;

      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);

      expect(() => {
        list.fromEnd(-5);
      }).toThrow();
    });

    it('Where the linked list is of a size 1', () => {
      list.insert(1);

      expect(() => {
        list.fromEnd(1);
      }).toThrow();
      expect(list.fromEnd(0).value).toEqual(1);
    });

    it('"Happy Path" where k is not at the end, but somewhere in the middle of the linked list', () => {
      // let node5 = {value: 1, next: null};
      // let node4 = {value: 2, next: node5};
      // let node3 = {value: 3, next: node4};
      // let node2 = {value: 4, next: node3};
      // let node = {value: 5, next: node2};

      // list.head = node;

      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);
      list.insert(5);

      expect(list.fromEnd(3).value).toEqual(4);
    });
  });
});
