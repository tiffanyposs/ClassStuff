var callInFive = function(print){
  setTimeout(print, 5000);
}

callInFive(function(){
  console.log("Printing!");
});

/*
function callInFive is made that takes one perameter
this will setTimeout to print that parameter once in 5 seconds

then callInFive is called with the parameter that is an anynomous
function being a functions that
console.logs "Printing!" Notice it doen't have a parameter

if we would have done:

var callInFive = function(print){
setTimeout(print, 5000);
}

var hello = function(){
  console.log("Hello!");
};

var goodbye = function(){
  console.log("Goodbye");
};

callInFive(hello)
callInFive(goodbye)
*/
