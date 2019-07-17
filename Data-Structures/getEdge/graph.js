'use strict';


class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.weight = weight || 0;
    this.vertex = vertex;

  }
}

class Graph{
  constructor(){
    //Map = a hashtable that is not hashing
    this._adjacencyList = new Map();
    this._vertex = new Vertex();

  }
  addValue(value){
    if (!value){
      return null; 
    }else{
      let vertex = new Vertex(value);
      this.addVertex(vertex);
    }
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);

  }

  addDirectedEdge(startVertex, endVertex, weight){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('Invalid Verticies');

    }
    const adjacencies = this._adjacencyList.get(startVertex);
    
    //attaches the startVertex to the endVertex with the edge
    adjacencies.push(new Edge(endVertex, weight));


  }

  addBidirectionalEdge(vertexA, vertexB, weight){
    //Adding two directional edges for both verticies so they can each access each other
    this.addBidirectionalEdge(vertexA, vertexB, weight);
    this.addBidirectionalEdge(vertexB, vertexA, weight);

  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('Invaild vertex', vertex);
    }
    return [...this._adjacencyList.get(vertex)];
  }

  pathTo(startVertex, goalVertex){
    const stack = [];
    const visitedVerticies = new Set();
    const parentPath = new Map();

    stack.push(startVertex);
    visitedVerticies.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();

      console.log(currentVertex, goalVertex);
      if(currentVertex === goalVertex){
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentVertex);

      //Depth first search
      for(let edge of neighbors){
        const neighborVertex = edge.vertex;

        //Checks to see if vertex has been visited
        if(visitedVerticies.has(neighborVertex)){
          //if it has, keep it going
          continue;
        }else{
          visitedVerticies.add(neighborVertex);
        }
        stack.push(neighborVertex);
        parentPath.set(neighborVertex, currentVertex);
      }

    }
  }


  // printAdjacencyList(){
  //   //Iterate over all keys in map
  //   //For each key, print to screen
  //   //Print vertex in all edges

  //   let keys = this._adjacencyList.keys();

  //   for(let value of keys of this.adjacencyList){

  

  //   }

  // }

  getNodes(){
    // Returns all of the nodes in the graph as a collection (set, list, or similar)
    if(this.numberOfNodes !== 0){
      return [...this._adjacencyList.keys()];
    }else{
      return null;
    }
  }


  Size(){
    // Returns the total number of nodes in the graph
    return this._adjacencyList.size;
  }
}

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

console.log(graph.getNeighbors(seven));
// console.log(util.inspect(graph.pathTo(eight, seven)));
console.log(graph.pathTo(six, zero));
console.log('graph getNodes', graph.getNodes());

module.exports = {Graph, Edge, Vertex};