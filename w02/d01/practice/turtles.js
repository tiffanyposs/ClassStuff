var leonardo = {
  name: "Leonardo",
  color: "blue",
  weapons: "ninjato",
  namedAfter: "Leonardo da Vinci",
  likesPizza: "true"
}

var michelangelo = {
  name: "Michelangelo",
  color: "orange",
  weapons: "nunchucks",
  namedAfter: "Michelangelo Buonarroti",
  likesPizza: "true"
}

var raphael = {
  name: "Raphael",
  color: "red",
  weapons: "sai",
  namedAfter: "Raffaello Sanzio da Urbino",
  likesPizza: "true"
}

var donatello = {
  name: "Donatello",
  color: "purple",
  weapons: "bo",
  namedAfter: "Donato di Niccolo di Betto Bardi",
  likesPizza: "true"
}

var turtles = [leonardo, michelangelo, raphael, donatello]

//prints out all the names
/*
for(i=0; i < turtles.length; i++){
  var name = turtles[i].name;
  console.log(name);
}
*/

for(i=0; i < turtles.length; i++){
  var name = turtles[i].name;
  var color = turtles[i].color;
  var weapons = turtles[i].weapons;
  var namedAfter = turtles[i].namedAfter;
console.log(name + " wears a " + color + " bandana, his weapon is "
+ weapons + ", he is named after " + namedAfter + ", and he likes pizza.")

}
