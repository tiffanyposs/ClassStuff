var myZoo = ["elephant", "alligator", "panda", "lion",
"monkey", "koala", "tiger", "t-rex", "puffins",
"dodo", "Crawford", "penguins"]
var new_myZoo = []

var swap = function(first, second){
  new_myZoo = myZoo;
  var counter = 0;
  while(counter <= new_myZoo.length){
    if(new_myZoo[counter] === first){
      var switch_1 = new_myZoo[counter];
      var count_1 = counter;
      counter++;
    }
    else if(new_myZoo[counter] === second){
      var switch_2 = new_myZoo[counter];
      var count_2 = counter;
      counter++;
    }
    else{
      counter++;
    }
  }
  new_myZoo[count_1] = switch_2;
  new_myZoo[count_2] = switch_1;
  return new_myZoo;
}

console.log(swap("tiger", "Crawford"))


/*
This function will swap any two items in an array

creates an array called myZoo
creates an empty array called new_myZoo
creates a function called swap, which takes two perameters first, second
sets var to the array myZoo
make a counter var set at 0 for first index spot
while statement executes  the loop until the index counter is = array length
if statement checks if each spot is equal to input parameter
if it is it will set that peramiter to a new variable switch_1
and set the index number to a new variable count_1

else if does the same but for the second parameter

else just ups the counter

loops through until it finds both parameters

then switches the two paramaters that were found
*/
