// Input: Unsorted Array of integers A
// Output: Sorted Array of integers A

// Loop invariant of Loop 3
// At the start of each iteration of the loop,
// subarray A[p...k-1] contains k - p smallest elements of L[] and R[] in sorted order

// Rewrite the MERGE procedure so that it does not use sentinels,
// instead stopping once either array L or R has had all its elements copied back to A
// and then copying the remainder of the other array back into A.

function merge (A, p, q, r) {
  var L = A.slice(p, q)
  var R = A.slice(q + 1, r)
  var indexL = 0
  var indexR = 0
  for (var i = p; i <= r; i++) {
    if (L[indexL] < R[indexR]) {
      A[i] = L[indexL]
      indexL++
    } else {
      A[i] = R[indexR]
      indexR++
    }
  }
}

function mergeSort () {

}

console.log(mergeSort([9, 7, 5, 11, 12, 2, 14, 3, 10, 6]))
