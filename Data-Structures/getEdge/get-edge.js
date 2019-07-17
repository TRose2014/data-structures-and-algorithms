'use strict';

function getEdge(graph, array){
  let total = 0;
  let startingLocation;
  let vertexLocation = graph.getNodes();
  for(let i = 0; i < vertexLocation.length; i++){
    if(vertexLocation[i].value === array[0]){
      startingLocation = vertexLocation[i];
    }
  }
  for(let i = 1; i < array.length; i++){

    let neighbor = graph.getNeighbors(startingLocation);
    
    let isFound = false;
    for(let j = 0; j < neighbor.length; j++){
      if(neighbor[j].vertex.value === array[i]){
        total += neighbor[j].weight;
        isFound = true;
        startingLocation = neighbor[j].vertex;
        break;
      }
    }
    if(!isFound){
      return false + ' $0';
    }
  }
  return `true $${total}`;
}



const Graph = require('./graph').Graph;


let graph = new Graph();
let seattle = graph.addNode('Seattle');
let bend = graph.addNode('Bend');
let LA = graph.addNode('LA');
let NY = graph.addNode('New York');
// console.log(seattle);
graph.addBiDirectionalEdge(seattle, bend, 22);
graph.addBiDirectionalEdge(seattle, NY, 13);
graph.addBiDirectionalEdge(NY, LA, 120);
graph.addBiDirectionalEdge(bend, NY, 30);
graph.addBiDirectionalEdge(bend, LA, 30);

let cityArr = ['Seattle', 'New York', 'LA', 'Seattle'];
let cityArr2 = ['Seattle', 'Bend', 'LA'];

console.log(getEdge(graph, cityArr));
console.log(getEdge(graph, cityArr2));

module.exports = getEdge;