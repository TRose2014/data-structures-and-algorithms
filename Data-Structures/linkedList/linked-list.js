'use strict';
// eslint-disable-next-line no-redeclare
class Node{
  constructor (value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  insert(value){
    let newNode = new Node(value);
    if(this.head){
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  includes(value){
    while(this.head.next !== null){
      if(this.head.value === value){
        return true;
      }
      this.head = this.head.next;
    }
    return false;
  }

  print(){
    console.log(this.head);
  }
}

let list = new LinkedList();
list.insert(3);
list.insert(5);
list.insert(1);
console.log(list);
console.log(list.includes(4));


module.exports = exports = LinkedList;



//resource:  https://www.youtube.com/watch?v=AwMx3BzdzrM
//resource:  http://www.scriptonitejs.com/js-singly-linked-list/#more-576