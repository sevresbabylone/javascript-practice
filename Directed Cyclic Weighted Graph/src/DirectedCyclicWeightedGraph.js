// The number of trips starting at C and ending at C with a maximum of 3 stops.
// The number of trips starting at A and ending at C with exactly 4 stops.
// The length of the shortest route (in terms of distance to travel) from A to C.
// The length of the shortest route (in terms of distance to travel) from B to B.
// The number of different routes from C to C with a distance of less than 30.

const Vertex = require('./Vertex.js')

class DirectedCyclicWeightedGraph {
  constructor () {
    this.vertexList = []
    this.adjacencyMatrix = []
    this.noOfVerts = 0
    this.mapping = []
  }
  getIndex (label) {
    return this.mapping.indexOf(label)
  }
  addVertex (label) {
    this.vertexList[this.noOfVerts] = new Vertex(label)
    this.mapping[this.noOfVerts] = label
    this.adjacencyMatrix[this.noOfVerts] = []
    this.noOfVerts++
  }
  addEdge ({start, end, weight}) {
    if (!(this.mapping.includes(start))) {
      this.addVertex(start)
    }
    if (!(this.mapping.includes(end))) {
      this.addVertex(end)
    }

    var startIndex = this.getIndex(start)
    var endIndex = this.getIndex(end)

    this.adjacencyMatrix[startIndex][endIndex] = weight
  }
  populateGraph (input) {
    this.parseInputData(input).forEach((edge) => {
      this.addEdge(this.parseEdge(edge))
    })
  }
  parseInputData (input) {
    var edgeArray = input.slice(7).split(',').map((edge) => {
      return edge.trim()
    })
    return edgeArray
  }
  parseEdge (edge) {
    var start = edge.slice(0, 1)
    var end = edge.slice(1, 2)
    var weight = parseInt(edge.slice(2), 10)
    return {start: start, end: end, weight: weight}
  }
  displayAdjacencyMatrix () {
    var topLine = this.mapping.reduce((top, currentLabel) => {
      return (top += `${currentLabel} `)
    }, '  ')
    console.log(topLine)
    for (var i = 0; i < this.noOfVerts; i++) {
      var line = `${this.mapping[i]} `
      for (var k = 0; k < this.noOfVerts; k++) {
        if (this.adjacencyMatrix[i][k] !== undefined) {
          line += `${this.adjacencyMatrix[i][k]} `
        } else {
          line += '0 '
        }
      }
      console.log(line)
    }
  }
  // Takes an array of vertices to visit in order i.e. ['A', 'B', 'C']
  // if path exists, returns value of total distance
  // if path does not exist, throw error NO SUCH ROUTE, then return null
  getDistanceOfSpecificRoute (pathArray) {
    var totalDistance = 0
    for (var i = 1; i < pathArray.length; i++) {
      var startIndex = this.getIndex(pathArray[i - 1])
      var endIndex = this.getIndex(pathArray[i])
      var weight = this.adjacencyMatrix[startIndex][endIndex]
      if (weight === undefined) return null
      totalDistance += this.adjacencyMatrix[startIndex][endIndex]
    }
    return totalDistance
  }
  // bfs but with a maximum depth of maxStops, if currentVertex is end, increment noOfRoutes
  getNoOfRoutesWithMaximumNumberOfStops (start, end, maxStops) {
    currentVertex = 0
    var adjacentVertex
    var noOfRoutes = 0
    var indexQueue = [this.getIndex(start)]
    // if index queue is not empty
    while (!indexQueue.length === 0) {
      currentVertex = indexQueue.shift()
        indexQueue.concat(getAllAdjacentVertexes(currentVertex))
      }
    }
    return noOfRoutes
  }
  findEndVertex (currentVertex, end, depth) {
    return
  }
}


// start at c
//

  break;

module.exports = DirectedCyclicWeightedGraph
