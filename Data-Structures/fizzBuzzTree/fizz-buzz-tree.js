'use strict';

module.exports = (treeObj) => {
  let node = treeObj.root;

  let _walk = node => {
    if(node.value % 15 === 0){
      node.value = 'FizzBuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else if(node.value % 3 === 0){
      node.value = 'Fizz';
    } else {
      node.value;
    }

    if(node.left) _walk(node.left);
    
    if(node.right) _walk(node.right);
  };
  _walk(node);

  return treeObj;
};