var sayHello = function(){
  console.log("hello");
}


setInterval(sayHello, 2000)
//if the function is a perameter then there is no ()


//setInterval(sayHello(), 2000)
//this will ultimately give an error
//setInterval


// Aninymous Functions
//This is used when you are only going to used this once
//this is the same as above, but notice it doesn't have a name
//so it will not be able to be
setInterval(function() {
  console.log("hello");
}, 2000);

clearInterval(id)


//
