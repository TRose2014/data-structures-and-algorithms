'use strict';

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
  }
}

class Animal{
  constructor(name){
    this.name = name;
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
  }
}

class Cat extends Animal{
  constructor(name){
    super(name);
  }
}
  

class AnimalShelter{
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(animal){
    if(animal instanceof Dog){
      this.dogs.add(animal);
    }else if(animal instanceof Cat){
      this.cats.add(animal);
    }else{
      return null;
    }
  }
}

module.exports = AnimalShelter;

//need to review enqueue logic and work on dequeue logic