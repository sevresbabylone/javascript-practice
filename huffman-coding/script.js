function Node (unicodeValue, frequency) {
  this.unicodeValue = unicodeValue
  this.frequency = frequency
  this.leftChild = null
  this.rightChild = null
}

Node.prototype.toString = function () {
  return this.unicodeValue + ' : ' + this.frequency
}
// level order traversal display
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

Tree.prototype.getSuccessor = function () {

}
Tree.prototype.delete = function () {

}

// array based PriorityQueue
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
var characters = message.split('').reduce(function (dictionary, currentValue) {
  if (dictionary.hasOwnProperty(currentValue)) {
    dictionary[currentValue]++
  } else {
    dictionary[currentValue] = 1
  }
  return dictionary
}, {})

// Make a Tree object for each of the nodes
// Insert these trees in a PriorityQueue
var treePriorityQueue = new PriorityQueue()
for (var character in characters) {
  if (characters.hasOwnProperty(character)) {
    var newTree = new Tree()
    newTree.insert(new Node(character, characters[character]))
    treePriorityQueue.insert(newTree.root)
  }
}
// insert this new tree into priority PriorityQueue
// repeat until there is only 1 tree left in PriorityQueue
while (treePriorityQueue.queueArray.length > 1) {
  // remove (first) 2 roots from the PriorityQueue, make them into children of a new node in a new tree
  var first = treePriorityQueue.remove()
  var second = treePriorityQueue.remove()
  var combinedTree = new Tree()
  // new node has frequency that is the sum of the childrens frequencies, character field is null
  var newNode = new Node(null, first.frequency + second.frequency)
  newNode.leftChild = first
  newNode.rightChild = second
  combinedTree.insert(newNode)
  treePriorityQueue.insert(combinedTree.root)
}

// Part 2: Encoding the message
// Part 3: Decoding the message
