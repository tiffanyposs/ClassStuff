var leonardo = {
  name: "Leonardo",
  color: "blue",
  weapons: "ninjato",
  namedAfter: "Leonardo da Vinci",
  likesPizza: true,
  pizzaEaten: false,
  eatPizza: function(){
    if(this.pizzaEaten === true){
      return this.name + " has already eaten pizza.";
    }
    else{
      this.pizzaEaten = true;
      return this.name + " is eating pizza.";
    }
  }
}
//above has a function that will return leonardos name and that he
// has already eaten pizza
// else pizzaEaten will be changed to true because he is eating pizza

var michelangelo = {
  name: "Michelangelo",
  color: "orange",
  weapons: "nunchucks",
  namedAfter: "Michelangelo Buonarroti",
  likesPizza: true
}

var raphael = {
  name: "Raphael",
  color: "red",
  weapons: "sai",
  namedAfter: "Raffaello Sanzio da Urbino",
  likesPizza: true
}

var donatello = {
  name: "Donatello",
  color: "purple",
  weapons: "bo",
  namedAfter: "Donato di Niccolo di Betto Bardi",
  likesPizza: true
}

//var turtles = [leonardo, michelangelo, raphael, donatello]

console.log(leonardo.eatPizza() + ", " + leonardo.pizzaEaten)

//calling the eatPizza method from leonardo and the new evaluation
