makeTags('i', 'Yay')
// '<i>Yay</i>'
makeTags('i', 'Hello')
// '<i>Hello</i>'
makeTags('cite', 'Yay')
// '<cite>Yay</cite>'var first = process.argv[2];
var second = process.argv[3];
var x = first.slice(0, Math.floor(first.length / 2));
var y = second.slice(0, Math.floor(second.length / 2));
if (first.length > second.length) {
  console.log(x)
} else {
  console.log(y)
}

// this will print the second half of an argument
