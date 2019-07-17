const Graph = require('../graph').Graph;
let getEdge = require('../get-edge');

describe('get destination function', () => {

  let graph;
  beforeEach(()=> {
    graph = new Graph();

    let gotham = graph.addNode('Gotham');
    let palletTown = graph.addNode('Pallet Town');
    let bikiniBottom = graph.addNode('Bikini Bottom');
    let stardew = graph.addNode('Stardew');
    // console.log(gotham);
    graph.addBiDirectionalEdge(gotham, palletTown, 32);
    graph.addBiDirectionalEdge(gotham, stardew, 43);
    graph.addBiDirectionalEdge(stardew, bikiniBottom, 50);
  });


  it('should take in an array and a graph', () => {

    let array1 = ['Gotham', 'Stardew', 'Bikini Bottom'];

    let result = getEdge(graph, array1);

    expect(result).toBeTruthy();
  });
  it('should return false and $0 if there is not possible path', () => {

    let array2 = ['Gotham', 'Pallet Town', 'Bikini Bottom'];
    let result = getEdge(graph, array2);

    expect(result).toBe( 'false $0');
  });
  it('should return true and the total amount if there is a possible path', () => {

    let array1 = ['Gotham', 'Stardew', 'Bikini Bottom'];
    let result = getEdge(graph, array1);

    expect(result).toBe( 'true $93');
  });
});
