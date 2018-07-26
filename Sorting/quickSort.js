var unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]

function partition (array, left, right) {
  for (var i = left; i < right; i++) {
    if (array[i] <= array[right]) {
      swap(array, left, i)
      left++
    }
  }
  swap(array, left, right)
  return left
}
function quickSort (array, left, right) {
  if (left < right) {
    var pivot = partition(array, left, right)
    quickSort(array, left, pivot - 1)
    quickSort(array, pivot + 1, right)
  }
}

function swap (array, a, b) {
  var temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

quickSort(unsortedArray, 0, unsortedArray.length - 1)
console.log(unsortedArray)
