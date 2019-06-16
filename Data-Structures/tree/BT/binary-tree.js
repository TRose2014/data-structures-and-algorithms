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

module.exports = BinaryTree;