// Referring back to the searching problem (see Exercise 2.1-3),
// observe that if the sequence A is sorted, we can check the midpoint of the sequence
// against v􏰁 and eliminate half of the sequence from further consideration.
// The binary search algorithm repeats this procedure, halving the size of the
// remaining portion of the sequence each time.

// Write pseudocode, either iterative or recursive, for binary search.

// Iterative
// Input: Array of integers A, Integer Key
// Output: Index of matching Key in Array A, if not found -1

function binarySearch (A, left, right, key) {
  if (right >= left) {
    var midpoint = Math.floor(left + (right - left) / 2)
    if (A[midpoint] === key) {
      return midpoint
    }
    if (A[midpoint] > key) return binarySearch(A, left, midpoint - 1, key)
    return binarySearch(A, midpoint + 1, right, key)
  }
  return -1
}

var oddNumbers = [1, 3, 7, 9, 11, 13, 15, 17, 21, 23, 25, 27]
console.log('Element 13 is present at position ' + binarySearch(oddNumbers, 0, oddNumbers.length, 13))

// Argue that the worst-case running time of binary search is Θ(lg n).
// Worst case: Element is located at the very last mid-point or not present at all
// 2 ^ N = n total number of elements, so N tries to get to last mid-point
// therefore log 2 n = N is lgn
