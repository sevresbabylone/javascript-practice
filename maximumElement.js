// 1 x  -Push the element x into the stack.
// 2    -Delete the element present at the top of the stack.
// 3    -Print the maximum element in the stack.

processInput("155\r\n1 75\r\n1 93\r\n1 49\r\n1 27\r\n3\r\n2\r\n1 50\r\n3\r\n3\r\n3\r\n2\r\n3\r\n2\r\n3\r\n3\r\n1 86\r\n1 88\r\n1 74\r\n2\r\n1 14\r\n2\r\n2\r\n3\r\n1 3\r\n3\r\n1 32\r\n1 2\r\n2\r\n3\r\n3\r\n2\r\n2\r\n1 32\r\n1 13\r\n3\r\n3\r\n3\r\n2\r\n3\r\n3\r\n3\r\n1 60\r\n1 65\r\n3\r\n2\r\n1 54\r\n3\r\n3\r\n3\r\n3\r\n3\r\n1 16\r\n2\r\n2\r\n3\r\n3\r\n1 53\r\n3\r\n1 16\r\n1 6\r\n1 41\r\n1 22\r\n1 18\r\n1 8\r\n1 16\r\n3\r\n2\r\n2\r\n1 49\r\n2\r\n1 95\r\n2\r\n1 83\r\n3\r\n3\r\n2\r\n3\r\n3\r\n1 81\r\n2\r\n1 32\r\n2\r\n3\r\n2\r\n1 5\r\n2\r\n1 59\r\n3\r\n1 55\r\n3\r\n3\r\n3\r\n2\r\n3\r\n2\r\n2\r\n2\r\n3\r\n3\r\n2\r\n2\r\n1 65\r\n1 69\r\n2\r\n2\r\n1 82\r\n1 11\r\n1 36\r\n2\r\n1 17\r\n3\r\n3\r\n3\r\n1 59\r\n3\r\n1 80\r\n2\r\n1 54\r\n2\r\n1 49\r\n2\r\n2\r\n1 94\r\n2\r\n1 39\r\n2\r\n3\r\n1 34\r\n2\r\n2\r\n1 16\r\n2\r\n1 75\r\n1 26\r\n1 8\r\n2\r\n3\r\n2\r\n2\r\n3\r\n3\r\n3\r\n3\r\n2\r\n3\r\n3\r\n1 74\r\n2\r\n2\r\n3\r\n3\r\n2\r\n3\r\n2\r\n1 71");

function processInput (input) {
  var stack = [];
  var maxStack = [0];
  var inputLines = input.split("\n");
  inputLines.shift()
  inputLines.forEach(function (newLine) {
    switch (newLine[0]) {
      case '1':
        var newElement =  parseInt(newLine.split(' ')[1], 10);
        stack.push(newElement);
        if (newElement >= maxStack[0]) {
            maxStack.unshift(newElement)
        }
        break;
      case '2':
        if (stack.pop() === maxStack[0]) {
            maxStack.shift()
        }
        break;
      case '3':
        if (maxStack.length > 0) {
          console.log(maxStack[0])
        }
        break;
    }
  })
}
