'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.weight = weight || 0;
    this.vertex = vertex;
  }
}


class Graph {
  constructor() {
    this._adjacencyList = new Map();
    this.numberOfNodes = 0;
  }

  addNode(value){
    let newNode = new Vertex(value);
    this.addVertex(newNode);
    return newNode;
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
    this.numberOfNodes += 1;
  }

  addEdge(startVertex, endVertex, weight = 0){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('Invalid vertices');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBiDirectionalEdge(vertexA, vertexB, weight = 0){
    this.addEdge(vertexA, vertexB, weight);
    this.addEdge(vertexB, vertexA, weight);
  }
  
  getNodes() {
    if(this.numberOfNodes !== 0){
      return [...this._adjacencyList.keys()];
    }else{
      return null;
    }
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('Invalid vertex', vertex);
    }
    return [...this._adjacencyList.get(vertex)];
  }

  pathTo(startVertex, goalVertex){
    const stack = [];
    const visitedVertices = new Set();
    const parentPath = new Array();

    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();

      console.log(currentVertex, goalVertex);
      if(currentVertex === goalVertex){
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentVertex);

      for(let edge of neighbors){
        const neighborVertex = edge.vertex;

        if(visitedVertices.has(neighborVertex)){
          continue;
        }else{
          visitedVertices.add(neighborVertex);
        }

        stack.push(neighborVertex);
        parentPath.push(neighborVertex, currentVertex);
      }
    }
  }

  breadthFirst(startNode){
    if(this.numberOfNodes === 0){
      return null;
    }

    let visitedSet = new Set();
    let answerArray = [];
    let queue = [];
    queue.push(startNode);
    visitedSet.add(startNode);

    while(queue.length){
      let deQ = queue.shift();
      answerArray.push(deQ);
      visitedSet.add(deQ);
      const neighbors = this.getNeighbors(deQ);
      for(let j of neighbors){
        let neighbor = j.vertex;
        if(visitedSet.has(neighbor)){
          continue;
        }else{
          visitedSet.add(neighbor);
        }
        queue.push(neighbor);
      }
    }
    return answerArray;
  }

  size(){
    // Returns the total number of nodes in the graph
    return this._adjacencyList.size;
  }
}

module.exports = {Graph, Vertex, Edge};