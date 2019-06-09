'use strict';

const Node = require('../nodes/node');

class Stack{
  constructor(){
    this.top = null;
  }

  push(item){
    let node = new Node(item);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    this.top = this.top.next;
  }

  peek(){
    if(!this.top){
      return null;
    }else{
      return this.top.value;
    }
  }
}

module.exports = Stack;
