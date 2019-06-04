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
    console.log(list.includes(8));
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
      console.log(list);
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
      console.log(list);
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
});
