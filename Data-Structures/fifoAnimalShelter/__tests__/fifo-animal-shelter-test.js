'use strict'

'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe ('AnimalShelter', () => {
  let shelter;
  beforeEach(() => {
    shelter = new AnimalShelter();
  });
  
  describe('Enqueue Function', () => {
    it('can create a new empty shelter', () => {
      shelter = new AnimalShelter();

    
      expect(this.dog).toBeNull();
      expect(this.cat).toBeNull();
    
    });
    it('can enqueue an animal into the shelter', () => {
      let animal = 'dog';
      shelter.enqueue(animal);

      expect(shelter.front.animal).toBe(animal);

    });

    it('can enqueue multiple animals into the shelter', () => {
      let animal1 = 'dog';
      let animal2 = 'cat';
      let animal3 = 'dog';

      shelter.enqueue(animal1);
      shelter.enqueue(animal2);
      shelter.enqueue(animal3);

      expect(shelter.front.animal).toBe(animal1);
      expect(shelter.front.next.animal).toBe(animal2);
      expect(shelter.back.animal).toBe(animal3);
    });

    it('can only enqueue cats and dogs into the shelter', () => {
      let animal1 = 'dog';
      let animal2 = 'cat';
      let animal3 = 'iguana';

      shelter.enqueue(animal1);
      shelter.enqueue(animal2);
      shelter.enqueue(animal3);

      expect(shelter.front.animal).toBe(animal1);
      expect(shelter.front.next.animal).toBe(animal2);
      expect(shelter.back.animal).toBe(animal2);
    });
    });
  });