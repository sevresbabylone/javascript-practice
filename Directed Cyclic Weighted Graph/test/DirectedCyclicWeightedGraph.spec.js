const DirectedCyclicWeightedGraph = require('../src/DirectedCyclicWeightedGraph.js')
const Vertex = require('../src/Vertex.js')

const assert = require('chai').assert
const expect = require('chai').expect

describe('Directed Cyclic Weighted Graph', function () {
  describe('Constructor', function () {
    let dcwGraph
    beforeEach(() => {
      dcwGraph = new DirectedCyclicWeightedGraph()
    })
    it('assigns an initial value of 0 to number of vertices', () => {
      assert.equal(dcwGraph.noOfVerts, 0)
    })
    it('assigns an empty array to vertexList', () => {
      expect(dcwGraph.vertexList).to.be.instanceof(Array)
      expect(dcwGraph.vertexList).to.be.empty
    })
    it('assigns an empty array to adjacencyMatrix', () => {
      expect(dcwGraph.adjacencyMatrix).to.be.instanceof(Array)
      expect(dcwGraph.adjacencyMatrix).to.be.empty
    })
    it('assigns an empty array to mapping', () => {
      expect(dcwGraph.mapping).to.be.instanceof(Array)
      expect(dcwGraph.mapping).to.be.empty
    })
  })
  describe('when new vertex is added', function () {
    let dcwGraph
    beforeEach(() => {
      dcwGraph = new DirectedCyclicWeightedGraph()
    })
    it('adds new vertex to vertexList', () => {
      var expectedLength = dcwGraph.vertexList.length + 1
      dcwGraph.addVertex('A')
      expect(dcwGraph.vertexList.length).to.equal(expectedLength)
      expect(dcwGraph.vertexList[expectedLength - 1]).to.be.instanceof(Vertex)
    })
    it('adds label to mapping', () => {
      var expectedLength = dcwGraph.mapping.length + 1
      dcwGraph.addVertex('A')
      expect(dcwGraph.mapping.length).to.equal(expectedLength)
      expect(dcwGraph.mapping[expectedLength - 1]).to.equal('A')
    })
    it('adds an array to adjacencyMatrix', () => {
      dcwGraph.addVertex('A')
      expect(dcwGraph.vertexList[dcwGraph.noOfVerts - 1]).to.be.instanceof(Vertex)
    })
    it('increases noOfVerts by 1', () => {
      var expectedNoOfVerts = dcwGraph.noOfVerts + 1
      dcwGraph.addVertex('A')
      expect(dcwGraph.noOfVerts).to.equal(expectedNoOfVerts)
    })
  })
  describe('when new edge is added', function () {
    let dcwGraph
    beforeEach(() => {
      dcwGraph = new DirectedCyclicWeightedGraph()
    })
    it('assigns weight to correct position in matrix', () => {
      dcwGraph.addEdge({start: 'A', end: 'B', weight: 7 })
      expect(dcwGraph.adjacencyMatrix[dcwGraph.getIndex('A')][dcwGraph.getIndex('B')]).to.equal(7)
    })
  })
  it('populates graph with input', () => {
    var dcwGraph = new DirectedCyclicWeightedGraph()
    dcwGraph.populateGraph('Graph: AB1, BC2, CD3, DC4, CB5, BA6')
    expect(dcwGraph.adjacencyMatrix[dcwGraph.getIndex('A')][dcwGraph.getIndex('B')]).to.equal(1)
    expect(dcwGraph.adjacencyMatrix[dcwGraph.getIndex('B')][dcwGraph.getIndex('C')]).to.equal(2)
    expect(dcwGraph.adjacencyMatrix[dcwGraph.getIndex('C')][dcwGraph.getIndex('D')]).to.equal(3)
    expect(dcwGraph.adjacencyMatrix[dcwGraph.getIndex('D')][dcwGraph.getIndex('C')]).to.equal(4)
    expect(dcwGraph.adjacencyMatrix[dcwGraph.getIndex('C')][dcwGraph.getIndex('B')]).to.equal(5)
    expect(dcwGraph.adjacencyMatrix[dcwGraph.getIndex('B')][dcwGraph.getIndex('A')]).to.equal(6)
  })
  it('parses input data into array of edges', () => {
    var dcwGraph = new DirectedCyclicWeightedGraph()
    expect(dcwGraph.parseInputData('Graph: AE1, BC2')).to.deep.equal(['AE1', 'BC2'])
  })
  it('parses edge string into start, end and weight', () => {
    var dcwGraph = new DirectedCyclicWeightedGraph()
    const values = dcwGraph.parseEdge('AB1')
    expect(values.start).to.equal('A')
    expect(values.end).to.equal('B')
    expect(values.weight).to.equal(1)
  })
  it('displays adjacencyMatrix correctly', () => {

  })
  it('returns distance of specified route', () => {
    var dcwGraph = new DirectedCyclicWeightedGraph()
    dcwGraph.populateGraph('Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7')
    expect(dcwGraph.getDistanceOfSpecificRoute(['A', 'B', 'C'])).to.equal(9)
    expect(dcwGraph.getDistanceOfSpecificRoute(['A', 'D'])).to.equal(5)
    expect(dcwGraph.getDistanceOfSpecificRoute(['A', 'D', 'C'])).to.equal(13)
    expect(dcwGraph.getDistanceOfSpecificRoute(['A', 'E', 'B', 'C', 'D'])).to.equal(22)
    expect(dcwGraph.getDistanceOfSpecificRoute(['A', 'E', 'D'])).to.equal(null)
  })
  it('returns number of routes between two vertices with a specified maximum number of stops', () => {
    var dcwGraph = new DirectedCyclicWeightedGraph()
    dcwGraph.populateGraph('Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7')
    expect(dcwGraph.getNoOfRoutesWithMaximumNumberOfStops('C', 'C', 2)).to.equal(2)
  })
})
