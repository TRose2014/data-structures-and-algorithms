'use strict';

// const BinaryTree = require('../tree').BinaryTree;
const Node = require('../node/node');
const BinarySearchTree = require('../tree');

describe('Test for Travis', () => {
  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});

/*
        70
      /      \
    60        100
  /   \      /    \
20    65    80      120

*/

let root = new Node(70);
let sixty = new Node(60);
let twenty = new Node(20);
let sixtyFive = new Node(65);
let hundred = new Node(100);
let eighty = new Node (80);
let hundredTwenty = new Node(120);

root.left = sixty;
root.right = hundred;

sixty.left = twenty;
sixty.right = sixtyFive;

hundred.left = eighty;
hundred.right = hundredTwenty;

console.log(root.left);

const tree = new BinarySearchTree(root);
// const searchTree = new BinarySearchTree();


describe('Binary Tree', () => {
  it('should successfully instantiate an empty tree', () => {
    let treeTest = new BinarySearchTree();
    expect(treeTest).toBeDefined();
    expect(treeTest).toBeInstanceOf(BinarySearchTree);
  });

  it('should successfully instantiate a tree with a single root node', () => {
    expect(tree.root.value).toBe(70);
  });

  it('should successfully add a left child and right child to a single root node', () => {
    expect(tree.root.left.value).toBe(60);
    expect(tree.root.right.value).toBe(100);

  });
  
  describe('Traversals', () => {
    let inOrder = tree.inOrder();
    let postOrder = tree.postOrder();
    let preOrder = tree.preOrder();
    
    
    it('should successfully return a collection from a preorder traversal', () => {
      console.log(inOrder);
      expect(inOrder.toBeDefined());
      expect(inOrder.toEqual([twenty, sixtyFive, sixty, root, eighty, hundred, hundredTwenty]));
    });
  });


});


// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal


