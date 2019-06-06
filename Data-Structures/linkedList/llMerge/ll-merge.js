'use strict';

const LinkedList = require('./../linked-list');


let list = new LinkedList;

module.exports = exports = (listA, listB) =>{
  let listC = new LinkedList();
  let currentA = listA.head;
  let currentB = listB.head;

  while(currentA || currentB){

    while(currentA){
      listC.insert(currentA.value);
      currentA = currentA.next;
    }
    while(currentB){
      listC.insert(currentB.value);
      currentB = currentB.next;
    }
  }
  return listC;
};
