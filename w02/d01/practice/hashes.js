

//hashes and objects are the same

// "sean" the letters are 0123 index/char 0/"s"
// ["sam", "crawford", "sean"] the name index/position 012 index/element 0/"sam"

var arr = ["sam", "crawford", "sean", 1001]
arr[0] // "sam"


var s = "sean"
s[1] // "e", shorthand for .charAt

var obj = {name: "sean",
 age: 28,
 "5086481312":["david", "laura"]}
//key/value
//keys are almost always a string
// the key must be a string, so you put a number in quotes

console.log(obj["name"]) // it will print out "sean"

///

var sister = obj["5086481312"][1]  //now sister = "laura"

//

console.log(obj["age"]) // prints 28
var x = obj["age"]  // now x = 28

//

var obj = {
  name: "sean",
  age: 28,
  "5558342049": ["david", "laura"] // you can write it like this, numbers must be in string
}
obj["name"] = "sam"; // this will change name within obj so "sean" will now be "sam"
                    // this would also the the way you would have to do it with a number
obj.name = "sam" // you can also put it this way, this is called "dot notation" same as above
obj["5558342049"][0] = "Crawford" // this will change "david" to "Crawford"

//

console["log"]("hey")
console.log("hey") // log is actually a key you could write either way, but .log is shorthand

//

var obj = {
  age: 28,
  fav_num: 28,
  color: "purple",
  name: "sean"
}
var keys = Object.keys(obj) // this makes an array of all the keys in object
console.log(keys) // will print {"age", "fav_number"}
// this is why you can't really access keys to find the values since keys
// you can have mulitple
var key1 = keys[0]; // this selects the first object in the new keys array
var value = obj[key1] // since now you  know what key1 is you can call the value

//


var sean = {
  name: "sean",
  age: 28,
  color: "purple"
}
var sam = {
  name: "sam",
  age: 26,
  color: "purple"
}
var people = [sean, sam]
// or
var ppl = [];
ppl.push(sean);
ppl.push(sam);


//


var obj = {};
obj.x = 3;
obj.y = 5;
obj["z"]= "sean";
obj["a"]= [1, 2, 3]

console.log(obj)
{x:3, y:5, z:"sean", a:[1, 2, 3]}

var hello = function(){
  console.log("hello");
}

obj["sayHello"] = hello;
obj["sayHello"]();
obj.sayHello()

//
var x = function() {
  return 2;
}

var y = x; // 2
var z = x(); //2 but the function
console.log(y()) //
//

//
var a = function() {return 2;}
var b = a;
var num = a() // 2 = only the value of the function, not the function itself
var num2 = b() // 2 =
//

var a = 3;
var b = a;
a++;
console.log(b) // is 3

// this is calling a function within an object (also known as a method)
var obj = {
  name: "sean",
  age: 28,
  sayHello: function(){
    console.log("hey");
  },
  color: "purple",
  sayMyName: function(name){
    console.log(name);
  },
};

obj["sayHello"](); // prints hey
obj["sayMyName"]("Sean") // prints "Sean"

//

var obj = {
  name: "sean",
  age: 28,
  sayHello: function() {
    var myname = this.name; // this refers to the object you are inside of
    console.log("Hey I am " + myname);
  }
}

//

var createObj = function() {
  var thename = "sean";
  var age = 28
  var obj = {
    name: thename,
    age: age,
  }
  return obj;

}
var obj1 = createObj();
var obj2 = createObj();
// essencially obj1 and obj2 are the same, a funciton is used
//to make multiple


//

//below are called constructors
//they can be used to repeat a function to build things
//the best example I can think of is if people filling in their profile
var createPerson = function(){
  return {name: "sean"};
}
var p1= createPerson();
p1["age"] = 28; // now p1  has name:"sean" and age:28
var p2= createPerson() // new person

//
var createPerson = function(n, a){
  var o = {
    beautiful: true
    name: n,
    age: a
  }
  return o;
}

var p1= createPerson("sean", 28); // [beautiful: true, name: sean, age: 28]
var p2= create Person("sam", 26) // [beautiful: true, name: sam, age: 26]
p2["friendly"] = false //  now p2 is: [beautiful: true, name: sam, age: 26, friendly: false]

//

var Person = function() {
  this.name = "sean"; // .name dot notation
  this["age"] = 28;
}

var p1 = new Person(); // can do
p1.age = 27 // changes the age to 27
