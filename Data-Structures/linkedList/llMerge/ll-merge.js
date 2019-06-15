'use strict';

function mergedLinkedLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;

  for(let i = 0; i <= list1.length; i++){
    if(current1.next === null){
      list1.insertAfter(current1.value, current2.value);
      break;
    }
    list1.insertAfter(current1.value, current2.value);
    current1 = current1.next.next;
    current2 = current2.next;
  }
  return list1.head;
}
module.exports = mergedLinkedLists;