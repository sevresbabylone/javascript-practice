"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function Vertex(label) {
  _classCallCheck(this, Vertex);

  this.label = label;
  this.visited = false;
  this.isInTree = false;
};

module.exports = Vertex;