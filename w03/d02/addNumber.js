var array1 = [11, 22, 33, 44];
var array2 = [62, 73, 38, 49];

var addNumbers = function(x, y){
  var new_array = [];
  for(var i = 0; i < x.length; i++){
    new_array.push(x[i] + y[i]);
    //new_array[i] = x[i] + y[i];
  }
  return new_array
}

console.log(addNumbers(array1, array2))

// you can also do a for(var i = 0, var x = 7; y<8; i++, x++)
//with multiple vars

// to the the numbers int he same positions from two arrays


/*var addNumbers = function(num1, num2){
  return num1 + num2
}

console.log(addNumbers(12, 8))

// to add the sum of two numbers

*/
