var i = 0
var id = setInterval(function(){
    if(i < 5){
    console.log("hello");
    }
    else{
      clearInterval(id);
    }
    i++
}, 2000);

/*
var i = 0
var id = setInterval(function(){
  console.log("hello");
  i++;
  if(i===5){
    clearInterval(id);
  }
}, 2000);
*/

/*

var x = 0;
var n = setInterval(function(){
  if(x<5){
    console.log("Hello");
  }
  else{
    clearInterval(n);
  }
  x++;
}, 2000);

*/


/*
var id = setInterval(function() {
  console.log("hello");
}, 2000);

console.log(id);

setTimeout(function() {
  clearInterval(id);
}, 10100);
*/
