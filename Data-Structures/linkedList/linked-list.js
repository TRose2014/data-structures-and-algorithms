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
    this.head = newNode;

  }
  add(value){
    if(this.head === null){
      this.head = new Node(value);
      return this;
    }else{
      let currentNode = this.head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
      return this;
    }
    // this.length++;
  }
  includes(value){
    if(this.head.value === value){
      return true;
    }else{
      let currentNode = this.head;
      while(currentNode.next !== null){
        if(currentNode.value === value){
          return true;
        }
      }
      return false;
    }
  }
  print(){
    console.log(this.head);
  }
}

let list = new LinkedList();
list.insert(7);
console.log(list.insert(2));


module.exports = exports = LinkedList;

// let current = head;
// console.log(current);
// while(current !== null){
//   console.log(current.value);
//   current = current.next;
// }


//https://www.youtube.com/watch?v=AwMx3BzdzrM
