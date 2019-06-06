'use strict';

const LinkedList = require('../linked-list');
const merge = require('../llMerge/ll-merge');

describe('Funtions outside of the linkedList', () => {

  let listA;
  let listB;
  let listC;

  beforeEach(() => {
    listA = new LinkedList();
    listB = new LinkedList();

  });

  it('instance of new LinkedList() after merging', () => {
    // Arrange

    // Act
    listC = merge(listA, listB);

    // Assert
    expect(listC).toBeInstanceOf(LinkedList);
  });

  it('should contain node values from both lists', () => {
    // Arrange
    listA.insert(1);
    listB.insert(2);

    // Act
  
    listC = merge(listA, listB);
    console.log(listC.head.value);
    

    // Assert
    expect(listC.head.value).toBeDefined();
    expect(listC.head.next.value).toBeDefined();
  });

  it('should last node in new list be null', () => {
    // Arrange
    listA.insert(1);
    listB.insert(2);

    // Act
    listC = merge(listA, listB);
    let current = listC.head;
    while(current.next){
      current = current.next;
    }

    // Assert
    expect(current.value).toBe(1);
    expect(current.next).toBeNull();
  });
});