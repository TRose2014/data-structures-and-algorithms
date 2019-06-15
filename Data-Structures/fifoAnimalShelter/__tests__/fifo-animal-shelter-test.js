'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('Animal Shelter', () => {

  let newHome;
  console.log(newHome);

  beforeEach(() => {
    newHome = new AnimalShelter();
  });

  describe('constructor', () => {

    it('Can successfully instantiate an instance of AnimalShelter', () => {
      expect(newHome).toBeDefined();
      expect(newHome).toBeInstanceOf(AnimalShelter);
    });

    it('Should create an empty storage', () => {
      expect(newHome.storage).toBeDefined();
      expect(newHome.storage).toBeInstanceOf(Array);
    });
  });

  describe('enqueue', () => {

    it('Can properly enqueue into the shelter', () => {
      newHome.enqueue('cat');
      expect(newHome.storage[0].name).toEqual('cat');
      expect(newHome.storage.length).toEqual(1);
    });

    it('Should not add an animal if no value is provided', () => {
      expect(newHome.storage).toBeDefined();
      expect(newHome.storage).toBeInstanceOf(Array);
      expect(newHome.storage.length).toEqual(0);
    });

    it('Should return must be cat or dog if the name input is something else', () => {
      expect(newHome.enqueue('tiger')).toEqual('can only adopt a cat or a dog');
    });
  });

  describe('dequeue', () => {

    it('Should remove the oldest specified animal from the queue', () => {
      newHome.enqueue('cat');
      newHome.enqueue('dog');
      newHome.enqueue('cat');
      let popped = newHome.dequeue('dog');
      expect(popped).toEqual({name:'dog'});
      expect(newHome).toBeDefined();
      expect(newHome).toBeInstanceOf(AnimalShelter);
      expect(newHome.storage.length).toEqual(2);
    });

    it('Should not remove any other animal', () => {
      newHome.enqueue('cat');
      newHome.enqueue('dog');
      newHome.enqueue('cat');
      newHome.dequeue('dog');
      expect(newHome.storage[0].name).toEqual('cat');
      expect(newHome.storage[1].name).toEqual('cat');
    });

    it('Should return undefined if no parameter given', () => {
      expect(newHome.dequeue()).toBeUndefined();
    });
  });
});