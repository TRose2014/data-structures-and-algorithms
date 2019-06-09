'use strict';

const Queue = require('../queues');

describe('Queue Module', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('Can successfully enqueue into a queue', () => {
    queue.enqueue(7);
    expect(queue.front.value).toBe(7);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(7);
    queue.enqueue(8);
    queue.enqueue(9);
    console.log(queue);

    expect(queue.front.next.next.value).toBe(9);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(7);
    queue.enqueue(8);
    queue.dequeue();

    expect(queue.front.value).toBe(8);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(7);
    queue.peek();

    expect(queue.peek()).toBe(7);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(7);
    queue.enqueue(8);
    queue.enqueue(9);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();
  });

  it('Can successfully instantiate an empty queue', () =>{
    expect(queue).toBeInstanceOf(Queue);
  });
});

