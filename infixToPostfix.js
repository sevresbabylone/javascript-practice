var simpleExpression = '(A * (B + (C / D) ) )	' // => ABCD/+*
var quadraticFormula = '(-b+(b^2 - 4 * a * c)^(1/2) ) / 2*a' // half of the quadratic formula, actually

// converts infix notation to postfix
// if invalid, return null
// handles only + - / * ^ ( )

function infixToPostfix (input) {
  var infixArray = input.replace(/\s/g, '').split('')
  var postfixOutput = ''
  var operatorStack = []
  var precedence = {
    '+': 0,
    '-': 0,
    '/': 1,
    '*': 1,
    '^': 2
  }
  var opTop = ''
  infixArray.forEach(function (char) {
    switch (char) {
      case '(':
        operatorStack.push(char)
        break
      case ')':
        while (operatorStack.length !== 0) {
          opTop = operatorStack.pop()
          if (opTop === '(') break
          else postfixOutput = postfixOutput.concat(opTop)
        }
        break
      case '+':
      case '-':
      case '/':
      case '^':
      case '*':
        if (operatorStack.length === 0) {
          operatorStack.push(char)
        } else {
          while (operatorStack.length !== 0) {
            opTop = operatorStack.pop()
            if (opTop === '(') {
              operatorStack.push('(')
              operatorStack.push(char)
              break
            } else {
              if (precedence[opTop] < precedence[char]) {
                operatorStack.push(opTop)
                operatorStack.push(char)
                break
              } else {
                postfixOutput = postfixOutput.concat(opTop)
                operatorStack.push(char)
                break
              }
            }
          }
        }
        break
      default:
        postfixOutput = postfixOutput.concat(char)
    }
  })
  postfixOutput = postfixOutput.concat(operatorStack)
  return postfixOutput
}

console.log(infixToPostfix(simpleExpression))
console.log(infixToPostfix(quadraticFormula))
