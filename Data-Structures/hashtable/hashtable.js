'use strict';

//hashtable
// Need to move these files to hashtable1 branch

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
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
  }

  values(){
    let value = [];
    let current = this.head;

    while(current){
      this.value.push(current.value);
      current = current.next;
    }

    return value;
  }
}


class HashTable {
  constructor(size){
    this.size = size || 0;
    this.buckets = new Array(this.size);

  }
  /**
 * @function 
 * @param {sting} key 
 * @description splits the key to get indivudal characters, gets the charCode of each indivual character and reduces those numbers in one large number. Multiplies that by 599 and divides the size of the hash table and uses the remainder to determine the index
 */
  hash(key){
    return key.split('').reduce((prev, curr) => prev +curr.charCodeAt(0), 0) * 599 % this.size;
  }

  /**
   * @function add
   * @param - key/value pair
   * @description -  hashs the key, and add the key and value pair to the table
   */

  add(key, value){
    if(!key) throw new Error('Invalid key provided');
    if(this.contains(key)) throw new Error('Key already taken');

    let index = this.hash(key);


    //Has anything been put in this bucket yet. All buckets are undefined. If no, create a linked list so content can be added
    if(!this.buckets[index]) { this.buckets[index] = new LinkedList(); }

    //At this point this.buckets[index] is a linked List
    try{
      this.buckets[index].add([key, value]);
    }catch(e){
      throw e;
    }
  }

  print(){
    this.buckets.forEach((item, index) => console.log(index, item && item.values()));
  }



  /**
 * @function get
 * @param - key
 * @description - returns the value from the table
 */

  get(key){
    if(!key) throw new Error ('Invalid key');

    let index = this.hash(key);

    if(!this.buckets[index]) { return null; }

    return this.buckets[index].getWithKey(key);
  }

  contains(key){
    if(!key) throw new Error ('Invalid key');

    let index = this.hash(key);

    if(!this.buckets[index]) { return null; }

    return this.buckets[index].getWithKey(key) ? true : false;
  }





 
  /**
 * @function contains
 * @param - key
 * @description - returns a boolean, indicating if the key exists in the table already
 * 
 */





  /**
  * @function hash
  * @param - arbitrary key 
  * @description - returns an index in the collection.
  */

}

module.exports = {HashTable, LinkedList};