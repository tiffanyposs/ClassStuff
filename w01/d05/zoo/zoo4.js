var myZoo = ["elephant", "alligator", "panda", "lion",
"monkey", "koala", "tiger", "t-rex", "puffins",
"dodo", "crawford", "penguins"]
var new_myZoo = []

var sorter = function(){
  new_myZoo = myZoo;
  new_myZoo.sort();
  return new_myZoo;
}

console.log(sorter())
