'use strict';

let Graph = require('../graph').Graph;
let Vertex = require('../graph').Vertex;


describe('Test breath first function', () => {
  it('should return an empty array if no starting vertex was given', () => {
    let graph = new Graph();
    let result = graph.breadthFirst();
    expect(result).toBe('Vertex not defined');
  });

  it('should return an array with collection of nodes', () => {
    let graph = new Graph();

    let felipe = new Vertex('felipe');
    let matt = new Vertex('matt');
    let mike = new Vertex('mike');

    graph.addVertex(felipe);
    graph.addVertex(matt);
    graph.addVertex(mike);

    graph.addDirectedEdge(matt, felipe);
    graph.addDirectedEdge(matt, mike);

    let result = graph.breadthFirst(matt);

    expect(result).toEqual([ 'matt', 'felipe', 'mike' ]);
  });

  it('should return an array with all nodes', () => {
    let graph = new Graph();

    let test = new Vertex('test');

    graph.addVertex(test);
    let result = graph.breadthFirst(test);
    expect(result).toEqual(['test']);
  });
});