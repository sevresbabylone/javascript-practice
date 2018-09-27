var Vertex = require('../src/Vertex.js')

var assert = require('chai').assert
var expect = require('chai').expect

describe('Vertex', function () {
  describe('Constructor', function () {
    let newVertex
    beforeEach(() => {
      newVertex = new Vertex('A')
    })
    it('assigns an initial value of false to visited', () => {
      assert.equal(newVertex.visited, false)
    })
    it('assigns an initial value of false to isInTree', () => {
      assert.equal(newVertex.isInTree, false)
    })
    it('assigns correct label to Vertex', () => {
      assert.equal(newVertex.label, 'A')
    })
  })
})
