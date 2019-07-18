'use strict';

let depthFirst = require('../depth-first');
let Graph = require('../graph').Graph;
let Vertex = require('../graph').Vertex;

describe('breadFirst function', () => {
  let graph;
  beforeAll(()=> {
    graph = new Graph();
  
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');
    const D = new Vertex('D');
    const E = new Vertex('E');
    const F = new Vertex('F');
    const G = new Vertex('G');
    const H = new Vertex('H');
  
    graph.addVertex(A);
    graph.addVertex(B);
    graph.addVertex(C);
    graph.addVertex(D);
    graph.addVertex(E);
    graph.addVertex(F);
    graph.addVertex(G);
    graph.addVertex(H);
  
    graph.addBidirectionalEdge(A, B);
    graph.addBidirectionalEdge(B, C);
    graph.addBidirectionalEdge(C, G);
    graph.addBidirectionalEdge(B, D);
    graph.addBidirectionalEdge(D, E);
    graph.addBidirectionalEdge(D, F);
    graph.addBidirectionalEdge(D, H);
  });

  it('should take in a graph', () => {
    let result = () => depthFirst(graph);
    expect(result).toBeTruthy();
  });

  it('should return an error if no graph was passed in', () => {
    let result = depthFirst();
    expect(result).toBe('Invalid graph');
  });

  it('should print out a collection of nodes', () => {
    // let result = depthFirst(graph);
    // expect(result).toBe();
  });
});

