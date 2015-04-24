var num = parseInt(process.argv[2]);
var ran = Math.floor(10*Math.random());

if(num === ran) {
  console.log("success")
}
else {
  console.log("sorry, we are looking for " + ran)
}

// parseInt makes it into an interger

/*
Math.random()

100*Math.random

Math.floor(100*Math.random)
*/
