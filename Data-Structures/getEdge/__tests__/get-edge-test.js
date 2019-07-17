const Graph = require('../graph').Graph;
const Vertex = require('../graph').Vertex;
const Edge = require('../graph').Edge;
let getDestinations = require('../get-edge');

describe('get destination function', () => {
  it('should take in an array and a graph', () => {

    let graph = new Graph();
    let array = ['bikiniBotton', 'gotham', 'palletTown', 'stardew'];

    // let gotham = new Vertex('gotham');
    // let palletTown = new Vertex('Pallet Town');
    // let bikiniBottom = new Vertex('Bikini Bottom');
    // let stardew = new Vertex('Stardew');

    // graph.addVertex(gotham);
    // graph.addVertex(palletTown);
    // graph.addVertex(bikiniBottom);
    // graph.addVertex(stardew);
    
    // graph.addDirectedEdge(bikiniBottom, gotham, 27);
    // graph.addDirectedEdge(gotham, palletTown, 42);
    // graph.addDirectedEdge(palletTown, stardew, 80);

    // console.log(graph);
    // expect(graph).toBeTruthy();
    let result = getDestinations(array, graph);
    console.log(getDestinations(array, graph));


  });
});
