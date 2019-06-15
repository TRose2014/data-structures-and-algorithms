'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.stack = 0;
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