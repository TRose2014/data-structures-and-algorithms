'use strict';
class Node{
  constructor(value, left, right){
    this.value = value;
    this.left = left || null;
    this.right = right || null;

  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  add(value){
    if(!value) throw new Error('No value provided');

    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  getWithKey(key){
    if(!this.head) return;

    let current = this.head;

    while(current){
      if(current.value[0] === key) return current.value[1];
      current = current.next;
    }
    return;
  }

  values(){
    let values = [];
    let current = this.head;

    while(current){
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

//HashTable Class

class HashTable {
  constructor(size){
    this.size = size || 0;
    this.buckets = new Array(this.size);

  }
  hash(key){
    key = key.toString();
    if(typeof key !== 'string'){
      throw new Error('Invalid key provided');
    } else{
      return key.split('').reduce((prev, curr) => prev +curr.charCodeAt(0), 0) * 599 % this.size;
    }
  }

  add(key, value){
    if(!key) throw new Error('Invalid key provided');
    if(this.contains(key)) return Error('Key already taken');

    let index = this.hash(key);


    //Has anything been put in this bucket yet. All buckets are undefined. If no, create a linked list so content can be added
    if(!this.buckets[index]) { this.buckets[index] = new LinkedList(); }

    //At this point this.buckets[index] is a linked List
    // eslint-disable-next-line no-useless-catch
    try{
      this.buckets[index].add([key, value]);
    }catch(e){
      throw e;
    }
  }
  contains(key){
    if(!key) throw new Error ('Invalid key');

    let index = this.hash(key);

    if(!this.buckets[index]) { return null; }

    return this.buckets[index].getWithKey(key) ? true : false;
  }
}


let treeIntersection = (tree1, tree2) => {
  if (!tree1.root || !tree2.root) return 'Not valid tree';


  //Create new array
  let results = [];

  //Create new hashtable
  let hashTable = new HashTable(1);


  //Walk over tree
  let _walk = node => {
    if (node.left) _walk(node.left);

    let add = hashTable.add(node.value, node.value);

    //if add throws string, push into array but having a hard time pushing into array
    if (add === 'Key already taken') results.push(node.value);

    if (node.right) _walk(node.right);
  };

  _walk(tree1.root);
  _walk(tree2.root);

  return results;
};



module.exports = {treeIntersection, Node};