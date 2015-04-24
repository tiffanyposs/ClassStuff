var numbers = [0, 1, 1]
var counter = 3
var i = 1// could also put numbers[2]

  while(counter <= 100) {
  i = i + i;
  numbers.push(i);
  counter++;
}

console.log(numbers)


/*
var number starts an array
var counter starts a counter that starts at the number of elements in 'numbers'
var i represents the last number in the existing array 1

while the counter is less than 100 (thats how many it needs)
i is added to itself and reset the var i to new number
that new i is pushed into the end of the numbers array
the counter adds 1  then reloops until it equals 100
console.log prints the new array
*/
