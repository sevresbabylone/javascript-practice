'use strict';

var DirectedCyclicWeightedGraph = require('./DirectedCyclicWeightedGraph.js');

var DCWGgraph = new DirectedCyclicWeightedGraph();
DCWGgraph.populateGraph('Graph: AB1, BC2, CD3, DC4, CB5, BA6');
DCWGgraph.displayAdjacencyMatrix();