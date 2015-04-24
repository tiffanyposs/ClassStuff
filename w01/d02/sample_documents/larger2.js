var first = process.argv[2];
var second = process.argv[3];
if (first.length > second.length) {
  console.log(first.slice(1, -2))
} else {
  console.log(second.slice(1, -2))
}

// this will slice an argument into where you tell it to, printing only the
// area that you select by numbers
// after .slice(x, y) the first number is from the beginning, the second is
// from the end. 0 is the first position from either end 0123 is "this"
