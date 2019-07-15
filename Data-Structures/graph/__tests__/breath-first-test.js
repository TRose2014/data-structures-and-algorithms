'use strict';

let Graph = require('../graph').Graph;
let Edge = require('../graph').Edge;
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

    graph.addDirectedEdge(felipe, matt);
    graph.addDirectedEdge(matt, mike);

    console.log(graph._adjacencyList);

    let result = graph.breadthFirst(felipe);
    expect(result).toBe(['felipe', 'matt', 'mike']);




  });
});