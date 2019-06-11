// 'use strict';

const pseduoQueue = require('../queue-with-stacks');

describe('Queue with stacks', () => {
  let queue;

  beforeEach(() => {
    queue = new pseduoQueue;
  });

  describe('Instance of', () => {
    it('should be instance of a new pseduoQueue', () => {
      expect(queue).toBeInstanceOf(pseduoQueue);
    });
  });

  describe('enqueue(value', () => {
    it('should have one value', () => {
      queue.enqueue(5);
      expect(queue.stack1.peek()).toBe(5);
    });

    it('should be able to hold multiple values', () => {
      queue.enqueue(5);
      queue.enqueue(6);
      queue.enqueue(7);
      expect(queue.stack1.peek()).toBe(7);
    });

  });
    describe('dequeue', () => {
      it('should pop the first element', () => {
        queue.enqueue(5);
        queue.enqueue(6);
        queue.enqueue(7);
        let result = queue.dequeue();

        expect(result).toBe(5);
      });
    });
});