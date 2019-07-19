'use strict';

const Graph = require('../graph').Graph;
const Edge = require('../graph').Edge;
const Vertex = require('../graph').Vertex;


describe('Implementing the Graph', () => {
  it('should create an instance of a graph', () => {
    let graph = new Graph();

    expect(graph).toBeInstanceOf(Graph);

  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    let eight = new Vertex(8);

    graph.addVertex(eight);
  
    expect(graph.getNodes()).toEqual([{'value': 8}]);

  });

  describe('The add vertex function', () => {

    it('should successfully added a vertex to the graph', () => {
      let graph = new Graph();

      let test = graph.addValue('test');
      graph.addVertex(test);

      expect(graph._adjacencyList.get(test)).toEqual([]);
    });
  });

  describe('The add edge function', () => {

    it('should create an instance of an edge', () => {
      let edge = new Edge();

      expect(edge).toBeInstanceOf(Edge);
      expect(edge.weight).toBe(0);
    });

    it('An edge can be successfully added to the graph', () => {
      let graph = new Graph();

      let hello = graph.addValue('hello');
      let hi = graph.addValue('oh-hi');
      graph.addVertex(hello);
      graph.addVertex(hi);

      graph.addDirectedEdge(hello, hi, 4);

      let result = graph._adjacencyList.get(hello)[0].weight;

      expect(result).toBe(4);
      
    });

    it('A collection of all nodes can be properly retrieved from the graph', () => {

      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);
      const seven = new Vertex(7);
     

      graph.addVertex(eight);
      graph.addVertex(six);
      graph.addVertex(seven);
    

      graph.addDirectedEdge(eight, six);
      graph.addDirectedEdge(eight, seven);
    
      expect(graph.getNodes()).toEqual([{'value': 8}, {'value': 6}, {'value': 7}]);
    
    });
  });

  describe('The get neighbors function', () => {
    it('All appropriate neighbors can be retrieved from the graph', () => {

      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);
      const seven = new Vertex(7);
      const five = new Vertex(5);

      graph.addVertex(eight);
      graph.addVertex(six);
      graph.addVertex(seven);
      graph.addVertex(five);


      graph.addDirectedEdge(eight, six);
      graph.addDirectedEdge(eight, five);
      graph.addDirectedEdge(six, seven);
      graph.addDirectedEdge(seven, five);
    
      expect(graph.getNeighbors(six)).toEqual([{'vertex': {'value': 7}, 'weight': 0}]);
  
    });

    it('Neighbors are returned with the weight between nodes included', () => {

      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);
      const seven = new Vertex(7);
      const five = new Vertex(5);

      graph.addVertex(eight);
      graph.addVertex(six);
      graph.addVertex(seven);
      graph.addVertex(five);


      graph.addDirectedEdge(eight, six);
      graph.addDirectedEdge(eight, five);
      graph.addDirectedEdge(six, seven);
      graph.addDirectedEdge(seven, five);

      expect(graph.getNeighbors(seven)).toEqual([{'vertex': {'value': 5}, 'weight': 0}]);
  
    });

    it('should throw an error if no vertex was passed through', () => {
      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);
      const seven = new Vertex(7);
      const five = new Vertex(5);

      graph.addVertex(eight);
      graph.addVertex(six);
      graph.addVertex(seven);
      graph.addVertex(five);


      graph.addDirectedEdge(eight, six);
      graph.addDirectedEdge(eight, five);
      graph.addDirectedEdge(six, seven);
      graph.addDirectedEdge(seven, five);

      expect(graph.getNeighbors()).toBe('Invaild vertex');

    });
  });

  describe('The size function', () => {
    it('The proper size is returned, representing the number of nodes in the graph', () => {
  

      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);
      const seven = new Vertex(7);
      const five = new Vertex(5);

      graph.addVertex(eight);
      graph.addVertex(six);
      graph.addVertex(seven);
      graph.addVertex(five);


      graph.addDirectedEdge(eight, six);
      graph.addDirectedEdge(eight, five);
      graph.addDirectedEdge(six, seven);
      graph.addDirectedEdge(seven, five);

      expect(graph.size()).toEqual(4);
    });
  });
});
