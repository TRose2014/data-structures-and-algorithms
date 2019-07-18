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
  }

  push(item){
    let node = new Node(item);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(this.top){
      let value = this.top.value;
      this.top = this.top.next;
      return value;
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

module.exports = Stack;
