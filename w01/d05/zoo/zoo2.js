var myZoo = ["elephant", "alligator", "panda", "lion",
"monkey", "koala", "tiger", "t-rex", "puffins",
"dodo", "Crawford", "penguins"]
var new_myZoo = []


var sub = function(animal){
  new_myZoo = myZoo;
  var counter = 0;
  while(counter <= new_myZoo.length){
    if(new_myZoo[counter] === animal){
      new_myZoo.splice(counter, 1);
    }
    counter++;
  }

  return new_myZoo;
}

console.log(sub("dodo"))



/*
This function will subtract an animal to new_myZoo

creates an array called myZoo
creates an empty array called new_myZoo

creates a function called sub, which takes a parameter "animal"
the function sets new_myZoo to the array from myZoo
sets a variable counter to 0 to counte up

sets a while statement that will go until the counter reaches the length of array
if statement looks at each index of the new_myZoo array to see if its equal to the imput animal
if so, then it will splice that index (index to start, how many objects)

counter++ will add one to the counter as it loops through the array
then it will return the new_myZoo


we input dodo an it removes it from the array
*/
