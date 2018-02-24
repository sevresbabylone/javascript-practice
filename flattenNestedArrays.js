function flatten (array) {
  return array.reduce(function (finalArray, element) {
    if (Array.isArray(element)) {
      return finalArray.concat(flatten(element))
    } else { // base case
      return finalArray.concat(element)
    }
  }, [])
}

console.log(flatten([[1, 2, 3, 4], [5, 6, [7, 8, [9, 10, [11, 12, [13, 14]]]]], []]))
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
