'use strict';

let treeIntersection = require('../tree-intersection').treeIntersection;
let Node = require('../tree-intersection').Node;
let BinaryTree = require('../../tree/BT/binary-tree');

describe('Tree Intersection function', () => {
  let tree1;
  let tree2;
  beforeEach(() => {

    tree1 = new BinaryTree();
    tree2 = new BinaryTree();

    tree1.root = new Node(70);
    tree2.root = new Node(30);

    tree1.root.left = new Node(60); 
    tree2.root.left = new Node(10);

    tree1.root.left.left = new Node(2);
    tree2.root.left.left = new Node(6);

    tree1.root.left.right = new Node(5);
    tree2.root.left.right = new Node(60);

    tree1.root.right = new Node(8);
    tree2.root.right = new Node(5);

    tree1.root.right.right = new Node(30);
    tree2.root.right.right = new Node(2);

    tree1.root.right.left = new Node(13);
    tree2.root.right.left = new Node(7);
  });

  it('should create two new binary trees', () => {
    expect(tree1).toBeInstanceOf(BinaryTree);
    expect(tree2).toBeInstanceOf(BinaryTree);
  });

  it('should return matching node values from each tree in an array', () => {
    // let result = treeIntersection(tree1, tree2);

    // expect(result).toBe([5, 2, 60]);
  });

  it('should only take in trees', () => {
    let tree3 = false;
    let tree4 = {test};

    expect(treeIntersection(tree3, tree4)).toBe('Not valid tree');
  });

  it('should not change the values in the trees', () => {
    treeIntersection(tree1, tree2);

    expect(tree1.root.value).toEqual(70);
    expect(tree1.root.left.value).toEqual(60);
    expect(tree1.root.left.left.value).toEqual(2);
    expect(tree1.root.left.right.value).toEqual(5);
    expect(tree1.root.right.value).toEqual(8);
    expect(tree1.root.right.right.value).toEqual(30);
    expect(tree1.root.right.left.value).toEqual(13);

    expect(tree2.root.value).toEqual(30);
    expect(tree2.root.left.value).toEqual(10);
    expect(tree2.root.left.left.value).toEqual(6);
    expect(tree2.root.left.right.value).toEqual(60);
    expect(tree2.root.right.value).toEqual(5);
    expect(tree2.root.right.right.value).toEqual(2);
    expect(tree2.root.right.left.value).toEqual(7);
  });
});