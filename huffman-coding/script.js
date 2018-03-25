// Creating the Huffman tree





var message = 'SUSIE SAYS IT IS EASY.'

// collecting frequencies
var characters = message.split('').reduce(function (dictionary, currentValue) {
  if (dictionary.hasOwnProperty(currentValue)) {
    dictionary[currentValue]++
  } else {
    dictionary[currentValue] = 1
  }
  return dictionary
}, {})

// Create a Node object for every character in the message
var characterNodes = []
for (var character in characters) {
  if (characters.hasOwnProperty(character)) {
    characterNodes.push(new Node(character, characters[character]))
  }
}

// Make a Tree object for each of the nodes
// Insert these trees in a PriorityQueue
// smallest frequency (highest priority) ->> highest frequency (lowest priority)
// remove (first) 2 trees from the PriorityQueue, make them into children of a new nodes
// new node has frequency that is the sum of the childrens frequencies, character field is null
// insert this new tree into priority PriorityQueue
// repeat until there is only 1 tree left in PriorityQueue
// display tree
function Node (unicodeValue, frequency) {
  this.unicodeValue = unicodeValue
  this.frequency = frequency
  this.leftChild = null
  this.rightChild = null
}

Node.prototype.toString = function () {
  return this.unicodeValue + ' : ' + this.frequency
}

function Tree () {
  var root = null
}

Tree.prototype.getRoot = function () {
  return this.root
}
Tree.prototype.insert = function () {

}
Tree.prototype.getSuccessor = function () {

}
Tree.prototype.delete = function () {

}

// array based PriorityQueue
function PriorityQueue () {

}