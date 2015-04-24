
var tomagotchi = function(){
  var pet ={
  hungry: false,
  sick: false,
  age: 0,
  feed: function(){
    if(this.hungry === true){
      this.hungry = false;
      return "That was yummy!";
    }
    else{
      this.hungry = true;
      return "No thanks, I'm full.";
    }
  },
  sleep: function(){
      return "zzzzzzzzzzzzzzzz";
  },
  medicate: function(){
    if(this.sick === true){
      this.sick = false;
      return "I feel much better!";
    }
    else{
      this.sick = true;
      return "No thanks, I feel fine";
    }
  },
  increaseAge: function(){
      this.age += 1;
      return "Happy Birthday to me! I am " + this.age + " years old!";
  }
}
    return pet
}
// end tamagachi

//dog
var dog = tomagotchi();
dog.bark = function(){
  return "ruff ruff ";
}
dog.goOutside = function(){
  return "I own that tree now!";
}

//cat
var cat = tomagotchi();
cat.meow = function(){
  return "Meow!";
}
cat.useLitterBox = function(){
  return "Burried treasure!"
}

//fish
var fish = tomagotchi();
fish.swim = function(){
  return "Just keep swimming..."
}


console.log(dog.bark() + dog.bark())
console.log(dog.increaseAge())
console.log(dog.increaseAge())
console.log(dog.bark())
console.log(dog.goOutside())
console.log(cat.meow())
console.log(cat.sleep())
console.log(cat.useLitterBox())
console.log(fish.medicate())
console.log(fish.medicate())
console.log(fish.swim())


/*
This program creates a function tomagotchi which creates a
base tomagotchi template including key/values and functions
within it

Then three specific animals are based off off the tomagotchi:
dog, cat, and fish

each of these animals have special key/values that are added
using the dot method ex cat.meow = function(){}  adds the key meow
to cat and sets it as a function

Then some of the functions are console logged. Notice that some
that are called twice like .increaseAge increase the age every
time you call it within the same program
*/



//console.log(dog.increaseAge() + dog.increaseAge())

//console.log(fish.swim())
//console.log(cat.useLitterBox())
//console.log(cat.meow())
//console.log(dog.goOutside())
//console.log(dog.bark())

//console.log(tomagotchi())
/*
console.log(tomagotchi().hungry)
console.log(tomagotchi().sick)
console.log(tomagotchi().age)
console.log(tomagotchi().feed())
console.log(tomagotchi().sleep())
console.log(tomagotchi().medicate())
console.log(tomagotchi().increaseAge())
*/
