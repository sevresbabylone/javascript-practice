var DirectedCyclicWeightedGraph = require('./DirectedCyclicWeightedGraph.js')

var DCWGgraph = new DirectedCyclicWeightedGraph()
DCWGgraph.populateGraph('Graph: AB1, BC2, CD3, DC4, CB5, BA6')
DCWGgraph.displayAdjacencyMatrix()
// Input: An array of strings denoting first node, second node and weight of edge. i.e. [AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7]
// Expected Output: if no such route exists: 'NO SUCH ROUTE'.

// The distance of the route A-B-C.
// The distance of the route A-D.
// The distance of the route A-D-C.
// The distance of the route A-E-B-C-D.
// The distance of the route A-E-D.
