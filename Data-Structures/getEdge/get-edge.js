'use strict';

const Graph = require('./graph').Graph;
const Vertex = require('./graph').Vertex;

// function getEdges (destinations, graph) {
//   // Error checking
//   for(let location in destinations){
//     if(this._adjacencyList.has(location)){
//       throw new Error('A location does not match our records');
//     }
//   }

//   let startLocation;
//   let vertexLocation = graph.getNodes();
//   let total = 0;
//   for(let location of vertexLocation){
//     if (location.value === destinations[0]){
//       startLocation = location;
//     }
//   }

//   for(let i = 1; i < destinations.length; i++){
//     let neighbors = graph.getNeighbors(startLocation);
//     for (let location of neighbors){
//       if(location.vertex.value === destinations[i]){
//         startLocation = location.vertex;
//         total += location.weight;
//       }
//     }
//   }
//   return total;
// }

function getEdges(graph, array){
  let counter = 0;
  let current;
  let graphArray = graph.getNodes();
  for(let i = 0; i < graphArray.length; i++){
    if(graphArray[i].value === array[0]){
      current = graphArray[i];
    }
  }
  for(let i = 1; i < array.length; i++){

    let neighbor = graph.getNeighbors(current);
    
    let isFound = false;
    for(let j = 0; j < neighbor.length; j++){
      if(neighbor[j].vertex.value === array[i]){
        counter += neighbor[j].weight;
        isFound = true;
        current = neighbor[j].vertex;
        break;
      }
    }
    if(!isFound){
      return false + ' $0';
    }
  }
  return `true $${counter}`;
}

let graph = new Graph();

let gotham = new Vertex('gotham');
let palletTown = new Vertex('Pallet Town');
let bikiniBottom = new Vertex('Bikini Bottom');
let stardew = new Vertex('Stardew');

graph.addVertex(gotham);
graph.addVertex(palletTown);
graph.addVertex(bikiniBottom);
graph.addVertex(stardew);
    
graph.addDirectedEdge(bikiniBottom, gotham, 27);
graph.addDirectedEdge(gotham, palletTown, 42);
graph.addDirectedEdge(palletTown, stardew, 80);

let cityArr = ['Seattle', 'New York', 'LA', 'Seattle'];
let cityArr2 = ['Seattle', 'Bend', 'LA'];

console.log(getEdges(cityArr, graph ));
console.log(getEdges(cityArr2, graph));

module.exports = getEdges;