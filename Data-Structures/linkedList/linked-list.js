'use strict';
class Node{
  constructor (value){
    this.value = value;
    this.ref = null;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    let test = new Node(value);
    list.head = test;
    
  }
  // includes(index){
  //   if(index > -1){
  //     let current = this.head;
  //     console.log(current);
  //     let i = 0;
  //     while((current.next !== null) && (i < index)){
  //       current = current.next;
  //       console.log(current);
  //       i++;
  //     }
  //     return current !== null ? current.value : undefined;
  //   }else{
  //     return undefined;
  //   }
  // }

  
}

const list = new LinkedList();

console.log(list.head);
list.insert(7);
console.log(list.head);
list.insert(2);
console.log(list.head);
list.includes(3);
console.log(list.head);
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
