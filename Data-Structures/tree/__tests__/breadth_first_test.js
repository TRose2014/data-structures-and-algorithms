let trees = require('../BT/binary-tree');

describe('binaryTree', () => {
  let tree;
  beforeEach(() => {
    tree = new trees;

    // create root
    tree.root = {value: 25, left: null, right: null};

    // root.left
    tree.root.left = {value: 15, left: null, right: null};
    // root.left.left
    tree.root.left.left = {value: 10, left: null, right: null};
    // root.left.right
    tree.root.left.right = {value: 20, left: null, right: null};

    // root.right
    tree.root.right = {value: 30, left: null, right: null};
    // root.right.right
    tree.root.right.right = {value: 35, left: null, right: null};
    // root.right.left
    tree.root.right.left = {value: 28, left: null, right: null};
  });

  describe('breadthFirst', () => {
    it('Console logs all of the items in a tree', () => {
      let spy = jest.spyOn(console, 'log');

      tree.breadthFirst(tree);

      expect(spy).toHaveBeenCalledTimes(7);
      spy.mockRestore();
    });

    it('Should not modify the tree', () => {
      tree.breadthFirst(tree);

      expect(tree.root.value).toEqual(25);
      expect(tree.root.left.value).toEqual(15);
      expect(tree.root.left.left.value).toEqual(10);
      expect(tree.root.left.right.value).toEqual(20);
      expect(tree.root.right.value).toEqual(30);
      expect(tree.root.right.right.value).toEqual(35);
      expect(tree.root.right.left.value).toEqual(28);
    });
  });
});
