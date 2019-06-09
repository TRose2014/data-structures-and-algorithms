'use strict';

const Node = require('../nodes/node');

class Queue{
  constructor(){
    this.front = null;
  }
  enqueue(item){
    let node = new Node(item);
    let current = this.front;

    if(!current){
      this.front = node;
    }else{
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
  dequeue(){
    this.front = this.front.next;
  }

  peek(){
    return this.front.value;
  }
}

module.exports = Queue;