var stooges = ["Larry", "Curly", "Moe"];

var mergeString = function(array){
  var string = ""
  for(var i = 0; i < array.length; i++){
    string += ("Hey there, " + array[i] + ". ");
  }
  return string
}

var stoogeString = mergeString(stooges);

console.log(stoogeString)

/*
var stooges create an array of names
function merge String takes a perameter array
declares a var string that is empty
makes i counter that will loop through all the elements in an array
"hey there" array[i] . is added to the string variable,
and it loops through until that is written the length of the array
returns string

sets stooge string to calling the function mergeString to stooges array
stoogeString now equals "Hey there, Larry. Hey there, Curly. Hey there, Moe."


*/
