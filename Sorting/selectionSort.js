// Consider sorting n numbers stored in array A by first finding the smallest element of A and
// exchanging it with the element in A[1􏰃].
// Then find the second smallest element of A, and exchange it with A[2]􏰃.
// Continue in this manner for the first n 􏰂 1 elements of A.

 // Write pseudocode for this algorithm, which is known as selection sort.

// Input: Unsorted Array of integers A
// Output: Sorted Array of integers A

// for i = 1 to A.length - 1 do
//   smallest = i
//   for j = i + 1 to A.length do
//     if A[j] < A[smallest]
//     smallest = j
//   end for
//   temp = A[i]
//   A[i] = A[smallest]
//   A[smallest] = temp
// end for

// What loop invariant does this algorithm maintain?
// At each iteration of the for loop, the subarray A[1..i − 1] contains the i − 1 smallest
// elements of A in increasing order.

// Why does it need to run for only the first n 􏰂- 1 elements, rather than for all n elements?
// Because the internal loop searches through A[i...n] for the smallest element, by the time the subarray is of size n-1, there are
// no more smaller elements left

// Give the best-case and worst-case running times of selection sort in theta-notation.
// Best case and worst case are both θ(n^2)

function selectionSort (unsortedArray) {
  for (var i = 0; i < unsortedArray.length - 1; i++) {
    var smallest = i
    for (var j = i + 1; j < unsortedArray.length; j++) {
      if (unsortedArray[j] < unsortedArray[smallest]) {
        smallest = j
      }
    }
    var temp = unsortedArray[i]
    unsortedArray[i] = unsortedArray[smallest]
    unsortedArray[smallest] = temp
  }
  return unsortedArray
}

console.log(selectionSort([9, 7, 5, 11, 12, 2, 14, 3, 10, 6]))
