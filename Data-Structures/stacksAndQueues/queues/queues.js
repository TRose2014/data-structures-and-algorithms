'use strict';

const Node = require('../nodes/node');

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }
  enqueue(item){
    let node = new Node(item, null);

    if(this.back === null){
      this.front = node;
      this.back = node;
    }else{
      this.back.next = node;
      this.back = this.back.next;
    }
  }
  dequeue(){
    if(this.front !== null){
      let current = this.front.value;
      this.front = this.front.next;
      return current;
    }else{
      return null;
    }
  }

  peek(){
    if(!this.top){
      return null;
    }else{
      return this.top.value;
    }
  }
}

module.exports = Queue;