debugger;
var simpsons = ["Homer", "Marge", "Lisa", "Maggie", "Abe"];
var ul = document.querySelector("ul");
var button = document.querySelector("button");

simpsons.forEach(function(person){
  var li = document.createElement("li");
  li.innerText = person;
  ul.appendChild(li);
});

// this adds the a randome person from the array array and creates
// a li item
var add = function(){
  var array = ["Apu", "Moe", "Barney", "Otto", "Nelson"];
  var index = Math.floor(Math.random()*array.length);
  var random_index = array[index];
  array.splice(index, 1);
  var li = document.createElement("li");
  li.innerText = random_index;
  ul.appendChild(li)
}

button.addEventListener("click", add)
