'use strict';

class BinaryTree{
  constructor(node){
    this.root = node;
  }

  preOrder(){
  //Root Left Right
    let results = [];
    //Recursion
    let _walk = node => {
    //Root
      results.push(node.value); 
      //Left
      if(node.left) _walk(node.left);
      //Right
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder(){
  //Left Root Right

    let results = [];
    //Recursion
    let _walk = node => {
    //Left
      if(node.left) _walk(node.left);
      //Root
      results.push(node.value);
      //Right
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;

  }

  postOrder(){
  //Left Right Root

    let results = [];
    //Recursion
    let _walk = node => {
    //Left
      if(node.left) _walk(node.left);
      //Right
      if(node.right) _walk(node.right);
      //Root
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  breadthFirst(tree) {
    let queue = [tree.root];
    let currentNode = queue.shift();

    while (currentNode) {
      console.log(currentNode.value);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
      currentNode = queue.shift();
    }
  }

  findMaximumValue(tree) {
    let queue = [this.root];
    let currentNode = queue.shift();
    let maxVal = this.root.value;
    while (currentNode) {
      if(currentNode.value > maxVal){
        maxVal = currentNode.value;
      }
      queue.push(currentNode.left);
      queue.push(currentNode.right);
      currentNode = queue.shift();
    }
    return maxVal;

  }
}

module.exports = BinaryTree;