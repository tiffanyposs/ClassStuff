var number = []

var index = (Math.floor(100*Math.random()) + 1)

for(i=1; i<=100; i++) {
  number.push(i)
}

console.log(number[index])


// number is an empty array
// index chooses a randome number from 1-100 and rounds it down to integer
// the for statement sets i to 1 and as long as it is 100 or less it will add one
// (counting to 100) every time it does that it loops and puts i each time into
// "number" basically making an array 1-100
// console.log takes the array  and the index picks a random number in the arrayj
