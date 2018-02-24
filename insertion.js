var insert = function(array, rightIndex, value) {
  var subarray = [...array, value];
    for(var i = rightIndex ; i > 0 && array[i - 1] > value; i--) {
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
console.log(array)
// println("Array after inserting 2:  " + array);
//Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

// insert(array, 5, 9);
// println("Array after inserting 9:  " + array);
//Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

// insert(array, 6, 6);
// println("Array after inserting 6:  " + array);
//Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);
