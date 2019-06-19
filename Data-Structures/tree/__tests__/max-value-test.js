'use strict';

const Node = require('../node/node');
const BinaryTree = require('../BT/binary-tree');

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


const tree = new BinaryTree(root);

describe('Maximun Value Function', () => {
  it('should create an instance of a tree', () => {
    let tree = new BinaryTree;
    expect(tree).toBeInstanceOf(BinaryTree);
  });

  it('should return the max value in the tree', () => {
    let max = tree.findMaximumValue(root);
    expect(max).toBe(120);

  });
});

describe('Traversals', () => {

  beforeEach(() => {
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

    tree.root = root;
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let preOrder = tree.preOrder();
    expect(preOrder).toStrictEqual([70, 60, 20, 65, 100, 80, 120]);
  });


  it('Can successfully return a collection from an inorder traversal', () => {
    let order = tree.inOrder();
    expect(order).toStrictEqual([20, 60, 65, 70, 80, 100, 120]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let post = tree.postOrder();
    expect(post).toStrictEqual([20, 65, 60, 80, 120, 100, 70]);
  });

});