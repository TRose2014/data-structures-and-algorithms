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
    if(tree === null || tree === undefined){
      return 'error';
    }

    let queue = [tree.root];
    let currentNode = queue.shift();

    while (currentNode) {
      console.log(currentNode.value);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
      currentNode = queue.shift();
    }
  }

  findMaximumValue(tree){
    if(tree === null || tree === undefined){
      return 'error';
    }
    let max = tree.root.value;

    let _walk = node => {
      if(node.left){
        _walk(node.left);
      }
      if(max < node.value){
        max = node.value;
      }
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(tree.root);
    return max;
  }
}

module.exports = BinaryTree;