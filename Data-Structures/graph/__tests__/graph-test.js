'use strict';

const Graph = require('../graph').Graph;
const Edge = require('../graph').Edge;
const Vertex = require('../graph').Vertex;

beforeEach(() => {
  const graph = new Graph();

  const eight = new Vertex(8);
  const six = new Vertex(6);
  const seven = new Vertex(7);
  const five = new Vertex(5);
  const three = new Vertex(3);
  const zero = new Vertex(0);
  const nine = new Vertex(9);

  graph.addVertex(eight);
  graph.addVertex(six);
  graph.addVertex(seven);
  graph.addVertex(five);
  graph.addVertex(three);
  graph.addVertex(zero);
  graph.addVertex(nine);

  graph.addDirectedEdge(eight, six);
  graph.addDirectedEdge(eight, five);
  graph.addDirectedEdge(six, seven);
  graph.addDirectedEdge(seven, five);
  graph.addDirectedEdge(five, three);
  graph.addDirectedEdge(three, zero);
  graph.addDirectedEdge(zero, nine);
  graph.addDirectedEdge(nine, eight);
});

describe('Implementing the Graph', () => {
  it('should create an instance of a graph', () => {
    let graph = new Graph();

    expect(graph).toBeInstanceOf(Graph);

  });

  // it('A graph with only one node and edge can be properly returned', () => {
  //   let graph = new Graph();
  //   let eight = new Vertex(8);
  //   let result = () => graph.addVertex(eight);
  //   console.log(result);
  //   expect(result._vertex.value).toBe(8);

  // });

  describe('The add node function', () => {
    it('Node can be successfully added to the graph', () => {
  

    });
  });

  describe('The add edge function', () => {
    it('should create an instance of an edge', () => {
      let edge = new Edge();

      expect(edge).toBeInstanceOf(Edge);
      expect(edge.weight).toBe(0);

    });
    it('An edge can be successfully added to the graph', () => {
  

    });

    it('A collection of all nodes can be properly retrieved from the graph', () => {
    
    });
  });



  describe('The get neighbors function', () => {
    it('All appropriate neighbors can be retrieved from the graph', () => {
  
      
    });
    it('Neighbors are returned with the weight between nodes included', () => {
  
    });
  });

  describe('The size function', () => {
    it('The proper size is returned, representing the number of nodes in the graph', () => {
  
    });
    
  });
});
