var a = [3,4,5,6,20,11];

var removeEvens = function(array){
//  array.sort();
  for(var i = 0; i <= array.length; i++){
    if(array[i] % 2 === 0){
      array.splice(i, i);
    }
  }
  return array
}

var b = removeEvens(a);

console.log(b);


//function removeEvens will remove the even
//numbers from an array

/*
var a = [3, 4, 5, 6, 20, 11];

var removeEvens = function(array){
  var i = 0;
  while(i <= array.length){
    if(array[i] % 2 === 0){
      array.splice(i, i);
    }
    i++;
  }
  return array;
}

var b = removeEvens(a);

console.log(b);
*/
