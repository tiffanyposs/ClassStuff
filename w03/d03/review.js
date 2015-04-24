//example a  WRONG
//This resets x to 0 ever time it is clicked
//because it is inside of the function
var button= document.querySelector("button");

button.addEventListener("click", function(){
  var x = 0;
  alert(x);
  x++;
})


// example b CORRECT
/*
this is more common practice since the button is likely
to be used only once since there is only one button with that
function. You would write it in a block of text so it is 'portable'
*/
var button= document.querySelector("button");
var x = 0;
button.addEventListener("click", function(){
  alert(x);
  x++;
})




//example c CORRECT
var button= document.querySelector("button");
var x = 0;

var f = function(){
  alert(x);
  x++;
}

button.addEventListener("click", f)

//for calulator

var add = function(x, y){
  return x+y;
}

var calc = function(func, x, y){
  return func(x,y);
}

var answer = calc(add, 2, 3);
console.log(answer)
