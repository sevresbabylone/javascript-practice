'use strict';

var DirectedCyclicWeightedGraph = require('./DirectedCyclicWeightedGraph.js');

var DCWGgraph = new DirectedCyclicWeightedGraph();
DCWGgraph.populateGraph('Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7');
DCWGgraph.displayAdjacencyMatrix();
// Input: An array of strings denoting first node, second node and weight of edge. i.e. [AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7]
// Expected Output: if no such route exists: 'NO SUCH ROUTE'.