'use strict';

const BinaryTree = require('./BT/binary-tree');



class BinarySearchTree extends BinaryTree{
  constructor(node){
    super(node);

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

module.exports = BinarySearchTree;

