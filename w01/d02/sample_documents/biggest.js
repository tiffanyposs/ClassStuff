var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];

// this code coverts strings to integers, some students were having problems
// and needed to  type below for it to work with bigger numbers 
// var a = parseInt(a);
// var b = parseInt(b);
// var c = parseInt(c);

if ((a > b) && (a > c)) {
  console.log(a)
}
else if ((b > a) && (b > c)) {
  console.log(b)
}
else {
  console.log(c)
}

// This program will choose the highest number of the three arguments
// && both sides must evaluate to true
