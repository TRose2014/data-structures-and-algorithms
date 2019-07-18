'use strict';

let Stack = require('./stacks');
let Graph = require('./graph').Graph;
let Vertex = require('./graph').Vertex;

const depthFirst = (graph) => {
  if(!graph){
    return 'Invalid graph';
  }
  let stack = new Stack();
  let output = [];
  let visited = [];

  let value = graph._adjacencyList.keys().next().value;
  console.log(value);
  let startVertex = graph._adjacencyList.keys().next();
  console.log('startVertex', startVertex);
  
  stack.push(startVertex);
  visited.push(startVertex);
  output.push(startVertex);
  
  while(stack.peek()){
    let neighborsArr = graph.getNeighbors(value);

    for (let neighbor of neighborsArr) {
      let isIn = visited.includes(neighbor);
      if(isIn === false){
        console.log('this is the neighbor' , neighbor);
        stack.push(neighbor);
        output.push(neighbor.value);
        visited.push(neighbor);
        startVertex = graph.getNeighbors(neighbor.vertex);
        console.log('in loop', graph.getNeighbors(neighbor.vertex));
        console.log( 'reassigned startVertex', startVertex);
        console.log('this is the output inside the for loop' , output);
      }else{
        stack.pop();
        startVertex = stack.peek();
      }
    }
  }
  console.log('output', output);
  return output;
};

const graph = new Graph();

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

console.log(depthFirst(graph));

module.exports = depthFirst;


