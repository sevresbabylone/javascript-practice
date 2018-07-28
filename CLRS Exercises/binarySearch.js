// Referring back to the searching problem (see Exercise 2.1-3),
// observe that if the sequence A is sorted, we can check the midpoint of the sequence
// against v􏰁 and eliminate half of the sequence from further consideration.
// The binary search algorithm repeats this procedure, halving the size of the
// remaining portion of the sequence each time.

// Write pseudocode, either iterative or recursive, for binary search.
// Argue that the worst-case running time of binary search is Θ(lg n).

// Iterative
// Input: Array of integers A, Integer Key
// Output: Index of matching Key in Array A, if not found -1

// binarySearch(A, key)
