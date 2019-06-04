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
    let list = [];
    while(this.head){
      list.push(this.head.value);
      this.head = this.head.next;
    }
    return list;
  }

  //Class 6
  append(value){
    let current = this.head;
    let newNode = new Node(value);
    while(current.next !== null){
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue){
    let current = this.head;
    let node = new Node(newValue);
    if(this.head.value === value){
      this.insert(newValue);
      return newValue.value;
    }else{
      while(current.next.value !== value){
        current = current.next;
      }
      let temp = current.next;
      current.next = node;
      node.next = temp;
    }
  }
  insertAfter(value, newValue){
    let current = this.head;
    let node = new Node(newValue);
    while(current.value !== value){
      current = current.next;
    }
    let temp = current.next;
    current.next = node;
    current.next.next = temp;
  }
}

let list = new LinkedList();
list.insert(3);
list.insert(5);
list.insert(1);
console.log(list.print());


module.exports = exports = LinkedList;



//resource:  https://www.youtube.com/watch?v=AwMx3BzdzrM
//resource:  http://www.scriptonitejs.com/js-singly-linked-list/#more-576