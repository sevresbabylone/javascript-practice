// Tips for remembering and writing out insertionSort quickly
// Draw out the input sequence of numbers.
// Determine where the initial "sorted hand" is going to be (on the left or on the right),
// and the remaining cards on the table
// this sorted hand only has 1 card i

// Loop invariant

// Initialisation
// Maintenance
// Termination

var unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]

function insertionSort (array) {
  for (var j = array.length - 1; j >= 0; j--) {
    var key = array[j]
    var i = j + 1
    while (i < array.length && array[i] < key) {
      array[i - 1] = array[i]
      i++
    }
    array[ i - 1 ] = key
  }
  return array
}

console.log(insertionSort(unsortedArray))

// Rewrite the INSERTION-SORT procedure to sort into nonincreasing instead of non- decreasing order.

// We can express insertion sort as a recursive procedure as follows.
// In order to sort A[1..n], we recursively sort A[1...n-1] and then insert A[n]􏰃 into the sorted array A[1...n-1].
// Write a recurrence for the running time of this recursive version of insertion sort.
