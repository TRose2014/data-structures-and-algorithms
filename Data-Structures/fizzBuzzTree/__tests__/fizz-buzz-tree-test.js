'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');
const BST = require('../BT/binary-tree');
const Node = require('../node/node');

describe('fizzBuzz(treeObj) ', () => {
  let bst = new BST();

  beforeEach(() => {
    let root = new Node(15);
    let five = new Node(5);
    let eighteen = new Node(18);
    let thirty = new Node(30);
    let two = new Node(2);

    root.left = five;
    root.right = eighteen;
    root.left.left = thirty;
    root.right.right = two;


    bst.root = root;
  });

  it('should return instance of BST', () => {
    expect(bst).toBeInstanceOf(BST);
  });

  it('should change value of root.left from 5 to Buzz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.left.value).toBe('Buzz');
  });

  it('should change value of root.right from 18 to Fizz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.right.value).toBe('Fizz');
  });

  it('should change value of root.left from 30 to FizzBuzz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.left.left.value).toBe('FizzBuzz');
  });

  it('should return the value back if not divisible by 3 or 5 or both', () => {
    fizzBuzzTree(bst);
    expect(bst.root.right.right.value).toBe(2);
  });

});