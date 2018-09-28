'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// The number of trips starting at C and ending at C with a maximum of 3 stops.
// The number of trips starting at A and ending at C with exactly 4 stops.
// The length of the shortest route (in terms of distance to travel) from A to C.
// The length of the shortest route (in terms of distance to travel) from B to B.
// The number of different routes from C to C with a distance of less than 30.

var Vertex = require('./Vertex.js');

var DirectedCyclicWeightedGraph = function () {
  function DirectedCyclicWeightedGraph() {
    _classCallCheck(this, DirectedCyclicWeightedGraph);

    this.vertexList = [];
    this.adjacencyMatrix = [];
    this.noOfVerts = 0;
    this.mapping = [];
  }

  _createClass(DirectedCyclicWeightedGraph, [{
    key: 'getIndex',
    value: function getIndex(label) {
      return this.mapping.indexOf(label);
    }
  }, {
    key: 'addVertex',
    value: function addVertex(label) {
      this.vertexList[this.noOfVerts] = new Vertex(label);
      this.mapping[this.noOfVerts] = label;
      this.adjacencyMatrix[this.noOfVerts] = [];
      this.noOfVerts++;
    }
  }, {
    key: 'addEdge',
    value: function addEdge(_ref) {
      var start = _ref.start,
          end = _ref.end,
          weight = _ref.weight;

      if (!this.mapping.includes(start)) {
        this.addVertex(start);
      }
      if (!this.mapping.includes(end)) {
        this.addVertex(end);
      }

      var startIndex = this.getIndex(start);
      var endIndex = this.getIndex(end);

      this.adjacencyMatrix[startIndex][endIndex] = weight;
    }
  }, {
    key: 'populateGraph',
    value: function populateGraph(input) {
      var _this = this;

      this.parseInputData(input).forEach(function (edge) {
        _this.addEdge(_this.parseEdge(edge));
      });
    }
  }, {
    key: 'parseInputData',
    value: function parseInputData(input) {
      var edgeArray = input.slice(7).split(',').map(function (edge) {
        return edge.trim();
      });
      return edgeArray;
    }
  }, {
    key: 'parseEdge',
    value: function parseEdge(edge) {
      var start = edge.slice(0, 1);
      var end = edge.slice(1, 2);
      var weight = parseInt(edge.slice(2), 10);
      return { start: start, end: end, weight: weight };
    }
  }, {
    key: 'displayAdjacencyMatrix',
    value: function displayAdjacencyMatrix() {
      var topLine = this.mapping.reduce(function (top, currentLabel) {
        return top += currentLabel + ' ';
      }, '  ');
      console.log(topLine);
      for (var i = 0; i < this.noOfVerts; i++) {
        var line = this.mapping[i] + ' ';
        for (var k = 0; k < this.noOfVerts; k++) {
          if (this.adjacencyMatrix[i][k] !== undefined) {
            line += this.adjacencyMatrix[i][k] + ' ';
          } else {
            line += '0 ';
          }
        }
        console.log(line);
      }
    }
    // Takes an array of vertices to visit in order i.e. ['A', 'B', 'C']
    // if path exists, returns value of total distance
    // if path does not exist, throw error NO SUCH ROUTE, then return null

  }, {
    key: 'getDistanceOfSpecificRoute',
    value: function getDistanceOfSpecificRoute(pathArray) {
      var totalDistance = 0;
      for (var i = 1; i < pathArray.length; i++) {
        var startIndex = this.getIndex(pathArray[i - 1]);
        var endIndex = this.getIndex(pathArray[i]);
        var weight = this.adjacencyMatrix[startIndex][endIndex];
        if (weight === undefined) return null;
        totalDistance += this.adjacencyMatrix[startIndex][endIndex];
      }
      return totalDistance;
    }
  }, {
    key: 'getNoOfRoutesWithMaximumNumberOfStops',
    value: function getNoOfRoutesWithMaximumNumberOfStops(start, end, maxStops) {}
  }]);

  return DirectedCyclicWeightedGraph;
}();

module.exports = DirectedCyclicWeightedGraph;