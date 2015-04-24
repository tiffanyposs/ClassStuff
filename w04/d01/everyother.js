// this will take every other  number from an array and
// return a new array that adds the second parameter
// to every other place in  the new array AND the other
//spots multiply by the second parameter

var array = [1, 5, 10, 2, 20, 50]

var everyOther = function(nums, x){
  var counter = 0;
  var new_array = [];
  nums.forEach(function(y){
    if(counter % 2 === 0){
      var i = y + x;
      new_array.push(i);
      counter++
    }
    else{
      var k = y*x;
      new_array.push(k);
      counter++;
    }
  });
  return new_array;
}


console.log(everyOther(array, 8))

/*
// this will take every other  number from an array and
// return a new array that adds the second parameter
// to every other place in  the new array
var array = [1, 5, 10, 2, 20, 50]

var everyOther = function(nums, x){
  var counter = 0;
  var new_array = []
  nums.forEach(function(y){
    if(counter % 2 === 0){
      var i = y + x;
      new_array.push(i);
      counter++
    }
    else{
      new_array.push(y);
      counter++;
    }
  });
  return new_array;
}


console.log(everyOther(array, 8))

*/
