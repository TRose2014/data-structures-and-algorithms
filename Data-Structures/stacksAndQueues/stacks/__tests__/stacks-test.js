'use strict';

const Stack = require('../stacks');

describe('Stack Module', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });


  describe('constructor', () => {
    it('Can successfully push onto a stack', () => {

      stack.push(3);
      expect(stack.top.value).toBe(3);
    });

    it('Can successfully push multiple values onto a stack', () => {

      stack.push(3);
      stack.push(4);
      stack.push(5);
      expect(stack.top.value).toBe(5);
    });

    it('Can successfully pop off the stack', () => {
      stack.push(3);
      stack.pop();
      expect(stack.top).toBeNull();
    });

    it('an successfully empty a stack after multiple pops', () => {
      stack.push(3);
      stack.push(4);
      stack.push(5);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.top).toBeNull();
    });

    it('Can successfully peek the next item on the stack', () => {
      stack.push(6);
      stack.peek();
      expect(stack.peek()).toBe(6);
    });
  });

});

