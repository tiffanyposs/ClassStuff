var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//forEach method
// this will loop through all the arrays
// in the one called 
numbers.forEach(function(x){
  if(x % 2 === 0){
    console.log(x + " is even");
  }
  else{
    console.log(x + " is odd");
  }
});
