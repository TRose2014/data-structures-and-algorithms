'use strict';

module.exports = exports = mergedList;

const LinkedList = require('./../linked-list');


let list = new LinkedList;

console.log(list.insert(4));

function mergedList(list1, list2){
  let current1 = list1.head;
  let current2 = list2.head;

  for(let i = 0; i < list1.length; i++){
    list1.insertAfter(current1.value, current2.value);
    current1 = current1.next.next;
    current2 = current2.next.next;
  }
  return list.head;
}

// function mergedList(list1, list2){
//   let doubleList;
//   let counter;
//   doubleList = new LinkedList;
//   if (doubleList.head === null){
//     counter = 0;
//   } else if (list1.head === null && list2.head === null){
//     return doubleList;
//   } else if (counter % 2 === 0){
//     let tempNode = list1.head;
//     list1.head = list1.next;
//     doubleList.next = tempNode;
//     mergedList(list1, list2);
//     counter ++;
//   } else if (counter % 2 === 1){
//     let tempNode = list2.head;
//     list2.head = list2.next;
//     doubleList.next = tempNode;
//     counter++;
//     mergedList(list1, list2);
//   }


// let current = current;
