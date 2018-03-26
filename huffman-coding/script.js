/* Write a program to implement Huffman coding and decoding. It should do the following:
 - Accept a text message, possibly of more than one line.
 - Create a Huffman tree for this message.
 - Create a code table.
 - Encode the message into binary.
 - Decode the message from binary back to text.
If the message is short, the program should be able to display the Huffman tree after creating it.
You can use String variables to store binary numbers as arrangements of the characters 1 and 0.
Don’t worry about doing actual bit manipulation unless you really want to. */

function Node (unicodeValue, frequency) {
  this.unicodeValue = unicodeValue
  this.frequency = frequency
  this.leftChild = null
  this.rightChild = null
}

Node.prototype.toString = function () {
  return this.unicodeValue + ' : ' + this.frequency
}

Node.prototype.levelOrderDisplay = function (root) {
  var queue = []
  queue.push(root)
  while (queue.length > 0) {
    var currentNode = queue.shift()
    console.log(currentNode.toString())
    if (currentNode.leftChild !== null) {
      queue.push(currentNode.leftChild)
    }
    if (currentNode.rightChild !== null) {
      queue.push(currentNode.rightChild)
    }
  }
}

function Tree () {
  this.root = null
}

Tree.prototype.insert = function (newNode) {
  this.root = this.insertRec(newNode, this.root)
}
Tree.prototype.insertRec = function (newNode, newRoot) {
  if (newRoot === null) {
    newRoot = newNode
    return newRoot
  }
  if (newNode.frequency < newRoot.frequency) {
    newRoot.leftChild = this.insertRec(newNode, newRoot.leftChild)
  } else {
    newRoot.rightChild = this.insertRec(newNode, newRoot.rightChild)
  }
  return newRoot
}

// Array-based PriorityQueue
// smallest frequency (highest priority) ->> highest frequency (lowest priority)
function PriorityQueue () {
  this.queueArray = []
}

PriorityQueue.prototype.insert = function (newElement) {
  if (this.isEmpty()) {
    this.queueArray.push(newElement)
  } else {
    var currentIndex = 0
    while (currentIndex < this.queueArray.length && this.queueArray[currentIndex].frequency < newElement.frequency) {
      currentIndex++
    }
    this.queueArray.splice(currentIndex, 0, newElement)
  }
}

PriorityQueue.prototype.remove = function () {
  return this.queueArray.shift()
}
PriorityQueue.prototype.isEmpty = function () {
  return this.queueArray.length === 0
}

PriorityQueue.prototype.display = function () {
  this.queueArray.forEach(function (element, index) {
    element.levelOrderDisplay(element)
  })
}

var message = 'SSI ASEEYS I IS ASYTU.'

// Part 1: Creating the Huffman tree

// Collect frequencies into 1 object
var dictionary = message.split('').reduce(function (accumulator, currentValue) {
  if (accumulator.hasOwnProperty(currentValue)) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})

// Make a Tree object for each of the nodes
// Insert these trees in a PriorityQueue
var treePriorityQueue = new PriorityQueue()
for (var character in dictionary) {
  if (dictionary.hasOwnProperty(character)) {
    var newTree = new Tree()
    newTree.insert(new Node(character, dictionary[character]))
    treePriorityQueue.insert(newTree.root)
  }
}
// Insert this new tree into priority PriorityQueue
// Repeat until there is only 1 tree left in PriorityQueue
while (treePriorityQueue.queueArray.length > 1) {
  // Remove (first) 2 roots from the PriorityQueue, then make them into children of a new node in a new tree
  var first = treePriorityQueue.remove()
  var second = treePriorityQueue.remove()
  var combinedTree = new Tree()
  // New node has frequency that is the sum of the childrens frequencies, character field is null
  var newNode = new Node(null, first.frequency + second.frequency)
  newNode.leftChild = first
  newNode.rightChild = second
  combinedTree.insert(newNode)
  treePriorityQueue.insert(combinedTree.root)
}

// Part 2: Create Huffman code table

function getCharacterCodes (root) {
  var characterCodes = {}
  function getCharacterCodesRecur (node, leafPathCode) {
    if (node.leftChild === null && node.rightChild === null) { // base case: it's a leaf
      characterCodes[node.unicodeValue] = leafPathCode
    } else {
      getCharacterCodesRecur(node.leftChild, leafPathCode + '0')
      getCharacterCodesRecur(node.rightChild, leafPathCode + '1')
    }
  }
  getCharacterCodesRecur(root, '')
  return characterCodes
}
var huffmanTable = getCharacterCodes(treePriorityQueue.queueArray[0])

// Part 3: Encoding the message
var encodedMessage = message.split('').map(function (character) {
  return huffmanTable[character]
}).join('')
console.log(encodedMessage)
// Part 4: Decoding the message
