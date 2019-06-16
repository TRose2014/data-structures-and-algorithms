'use strict';

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


const tree = new BinarySearchTree(root);


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
    let bst = new BinarySearchTree();

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

      bst.root = root;
    });

    it('Can successfully return a collection from a preorder traversal', () => {
      let preOrder = bst.preOrder();
      expect(preOrder).toStrictEqual([70, 60, 20, 65, 100, 80, 120]);
    });


    it('Can successfully return a collection from an inorder traversal', () => {
      let order = bst.inOrder();
      expect(order).toStrictEqual([20, 60, 65, 70, 80, 100, 120]);
    });

    it('Can successfully return a collection from a postorder traversal', () => {
      let post = bst.postOrder();
      expect(post).toStrictEqual([20, 65, 60, 80, 120, 100, 70]);
    });

  });

  describe('add method', () => {
    let bst = new BinarySearchTree();

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

      bst.root = root;
    });
    it('Can successfully a tree with a single root node', () => {
      expect(tree.root).toBeDefined();
      expect(tree.root.value).toEqual(70);
    });
  });

  describe('contains method', () => {
    let bst = new BinarySearchTree();

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

      bst.root = root;
    });

    it('Should return true if tree contains value', () => {

      expect(tree.contains(60)).toBeTruthy();
    });

    it('Should return false if tree does not contain value', () => {

      expect(tree.contains(30)).toBeFalsy();
    });

    it('Should not run if no value is specified', () => {
      expect(tree.contains()).toEqual('No value');
    });
  });
});


