'use strict';

class Node{
  constructor(value, left, right){
    this.value = value;
    this.left = left || null;
    this.right = right || null;

  }
}

class BinaryTree{
  constructor(node, leaf){
    this.root = node;
    this.leaf = leaf;

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

  }
}

class BinarySearchTree extends BinaryTree{
  constructor(node){
    super();

  }

  add(node){
    if(!this.root){
      this.root = node; //the top is the node passed
      return node;
    }
  
    let currentNode = this.root; //the current node is the top node 
  
  
    // For sure can be refactored
    while(currentNode){
      if(node.value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = node;
          break;
        }else{
          currentNode = currentNode.left;
        }
      }else if(node.value > currentNode.value){
        //Go right
        if(!currentNode.right){
          currentNode.right = node;
          break;
        }else{
          currentNode.right = node; //Go right
        }
      }else{
        //if node values are equal do not add it if we are in a BST, but if we are in a BT add it
        throw new Error('Duplicate value in Binary Search Tree');
      }
    }
  }
  
  contains(){
  
  }
}

module.exports = {BinarySearchTree, BinaryTree};

