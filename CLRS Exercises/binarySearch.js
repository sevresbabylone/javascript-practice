function binarySearch (A, left, right, key) {
  while (left <= right) {
    var midpoint = Math.floor(left + (right - left) / 2)
    if (A[midpoint] === key) {
      return midpoint
    }
    if (A[midpoint] < key) left = midpoint + 1
    else right = midpoint - 1
  }
  return -1
}
var oddNumbers = [1, 3, 7, 9, 11, 13, 15, 17, 21, 23, 25, 27]
console.log('Element 13 is present at position ' + binarySearch(oddNumbers, 0, oddNumbers.length, 13))
