// We can express insertion sort as a recursive procedure as follows.
// In order to sort A[1..n]􏰀, we recursively sort A[1...n-1] and then insert
// A[n]􏰀 into the sorted array A[n - 1]􏰀.
// Write a recurrence for the running time of this recursive version of insertion sort.

function insertionRecur (A) {
  if (A.length === 1) return A // base case
  var smallerArray = insertionRecur(A.slice(0, A.length - 1))
  var key = A[A.length - 1]
  var i = smallerArray.length - 1
  while (key < smallerArray[i] && i >= 0) {
    smallerArray[i + 1] = smallerArray[i]
    i = i - 1
  }
  smallerArray[i + 1] = key
  return smallerArray
}
var unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
console.log(insertionRecur(unsortedArray))
