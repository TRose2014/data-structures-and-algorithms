/* eslint-disable indent */
'use strict';

// const util = require('util');
let Queue = require('./queue');


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

  getitembors(vertex){
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

      // console.log(currentVertex, goalVertex);
      if(currentVertex === goalVertex){
        return parentPath;
      }

      const itembors = this.getitembors(currentVertex);

      //Depth first search
      for(let edge of itembors){
        const itemborVertex = edge.vertex;

        //Checks to see if vertext has been visited
        if(visitedVerticies.has(itemborVertex)){

          //if it has, keep it going
          continue;
        }else{
          visitedVerticies.add(itemborVertex);
        }
        stack.push(itemborVertex);
        parentPath.set(itemborVertex, currentVertex);
      }

    }
  }

  breadthFirst(startingVertex){
    if(!startingVertex){
      return 'Vertex not defined';
    }
    let visited = [];
    let queue = new Queue();

    visited.push(startingVertex);
    queue.enqueue(startingVertex);

    while (queue.peek()) {
      let queueElement = queue.dequeue();

      let list = this._adjacencyList.get(queueElement);
      for (let i in list) {
        let item = list[i];
        if (!visited.includes(item)) {
          visited.push(item.vertex);
          queue.enqueue(item);
        }
      }
    }
    let keys = visited.map(key => key.value);
    return keys;
  }


  // printAdjacencyList(){
  //   //Iterate over all keys in map
  //   //For each key, print to screen
  //   //Print vertex in all edges

  //   let keys = this._adjacencyList.keys();

  //   for(let value of keys of this.adjacencyList){

  

  //   }

  // }

  // GetNodes()
  // Returns all of the nodes in the graph as a collection (set, list, or similar)

  size(){
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

console.log(graph.getitembors(seven));
// console.log(util.inspect(graph.pathTo(eight, seven)));
console.log(graph.pathTo(six, zero));

module.exports = {Graph, Edge, Vertex};