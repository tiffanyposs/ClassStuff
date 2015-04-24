var myZoo = ["elephant", "alligator", "panda", "lion",
"monkey", "koala", "tiger", "t-rex", "puffins",
"dodo", "Crawford", "penguins"]
var new_myZoo = []

var rev = function(){
  new_myZoo = myZoo;
  new_myZoo.reverse();
  return new_myZoo;
}

console.log(rev())
