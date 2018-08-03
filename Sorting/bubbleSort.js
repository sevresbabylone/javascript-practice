function bubbleSort (A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = A.length - 1; j > i; j--) {
      if (A[j] < A[j - 1]) {
        var temp = A[j - 1]
        A[j - 1] = A[j]
        A[j] = temp
      }
    }
  }
}

var unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
bubbleSort(unsortedArray)
console.log(unsortedArray)
