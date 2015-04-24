var myZoo = ["elephant", "alligator", "panda", "lion",
"monkey", "koala", "tiger", "t-rex", "puffins",
"dodo", "Crawford", "penguins"]
var new_myZoo = []

var add = function(animal){
  new_myZoo = myZoo;
  new_myZoo.push(animal);
  return new_myZoo;
}

console.log(add("kangaroo"))


/*

This function will add an animal to new_myZoo

creates an array called myZoo
creates an empty array called new_myZoo

creates a function called add, which takes a parameter "animal"
the function sets new_myZoo to the array from myZoo
then the perameter animal is pushed into the new new_myZoo array
then it returns new_myZoo

the console.log the function and sets animal to Kangaroo
pushing kangaroo into the new_myZoo array

*/
