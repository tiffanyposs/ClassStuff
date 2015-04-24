var array = [8, 3, 45, 2, 5]

var doublePrintRet = function(x){
  var new_array = [];
    x.forEach(function(y){
      new_array.push(y*2);
      });
  return new_array;
}

console.log(doublePrintRet(array))
/*
var array = [8, 3, 45, 2, 5]

var doublePrintArrays = function(x){
  x.forEach(function(y){
    console.log(y);
  });
}

doublePrintArrays(array)
*/

/*
var doublePrint = function(x){
  var total = x * 2;
  return total;
}

console.log(doublePrint(9))
*/
