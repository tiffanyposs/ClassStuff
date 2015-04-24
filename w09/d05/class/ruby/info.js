//EXAMPLE 1

var Person = function(name, age){
	this.name = name;
	this.age = age;
	this.sayHello = function(){
		console.log("Hey, my name is " + this.name);
	};
};

var Sam = new Person("Sam", 26);
Sam.sayHello();