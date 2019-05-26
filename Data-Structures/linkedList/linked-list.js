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



module.exports = exports = LinkedList;

// console.log(list.head);
// list.insert(7);
// list.insert(5);
// console.log(list.head);
list.insert(2);
// console.log(list.head);
// list.includes(3);
// console.log(list.head);
// console.log(list.add(4));
// console.log(list.add(7));
// console.log(list.add(2));
list.add(4);
list.add(1);
list.add(2);
// list.includes(4);
// console.log(list.includes(4));
console.log(list);
// console.log(list.includes(2));



// const head = new Node(2);
// console.log(head);

// const nodeTwo = head.ref = new Node (4);
// console.log(nodeTwo);

// head.ref.ref = new Node (6);

// let current = head;
// console.log(current);
// while(current !== null){
//   console.log(current.value);
//   current = current.next;
// }


//https://www.youtube.com/watch?v=AwMx3BzdzrM
