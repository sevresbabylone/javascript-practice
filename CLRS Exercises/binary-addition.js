// Input: Array A of length n representing binary digits of an integer,
//        Array B of length n representing binary digits of an integer
//
// Output: Array C of lenght n + 1 representing binary digits of A + B

function addition (a, b) {
  var c = []
  var carry = 0
  for (var i = a.length - 1; i >= 0; i--) {
    var sum = a[i] + b[i] + carry
    c[i + 1] = (a[i] + b[i] + carry) % 2
    if (sum >= 2) {
      carry = 1
    } else {
      carry = 0
    }
  }
  c[0] = carry
  return c
}

var A = [0, 0, 1, 1]
var B = [1, 0, 1, 1]
console.log(addition(A, B))
// C => [0, 1, 1, 1, 0]
