// Input: Unsorted Array of integers A
// Output: Sorted Array of integers A

// Loop invariant of Loop 3
// At the start of each iteration of the loop,
// subarray A[p...k-1] contains k - p smallest elements of L[] and R[] in sorted order

// Rewrite the MERGE procedure so that it does not use sentinels,
// instead stopping once either array L or R has had all its elements copied back to A
// and then copying the remainder of the other array back into A.

function merge (A, p, q, r) {
  var L = A.slice(p, q + 1)
  var R = A.slice(q + 1, r + 1)
  var remainingArray
  var pointer = p
  while (pointer <= r) {
    if (L[0] < R[0]) {
      A[pointer] = L.shift()
    } else {
      A[pointer] = R.shift()
    }
    pointer++
    if (L.length === 0) {
      remainingArray = R
      break
    }
    if (R.length === 0) {
      remainingArray = L
      break
    }
  }
  while (pointer <= r) {
    A[pointer] = remainingArray.shift()
    pointer++
  }
}

function mergeSort (A, p, r) {
  if (p < r) {
    var q = Math.floor((p + r) / 2)
    mergeSort(A, p, q)
    mergeSort(A, q + 1, r)
    merge(A, p, q, r)
  }
}

var unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
mergeSort(unsortedArray, 0, unsortedArray.length - 1)
console.log(unsortedArray)
