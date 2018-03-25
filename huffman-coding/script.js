var message = 'SUSIE SAYS IT IS EASY'

function Node (unicodeValue, frequency) {
  this.unicodeValue = unicodeValue
  this.frequency = frequency
  this.leftChild = null
  this.rightChild = null
}
Node.prototype = {


}
function Tree () {

}

Tree.prototype = {

}

function PriorityQueue () {

}

// Creating the Huffman tree
// Create a Node object for every character in the message
// Make a Tree object for each of the nodes
// Insert these trees in a PriorityQueue
// smallest frequency (highest priority) ->> highest frequency (lowest priority)

// remove (first) 2 trees from the PriorityQueue, make them into children of a new nodes
// new node has frequency that is the sum of the childrens frequencies, character field is blank

// insert this new tree into priority PriorityQueue
// repeat until there is only 1 tree left in PriorityQueue
