###Ruby Classes and Inheritance

JAVASCRIPT

```
var Person = function(name, age){
	this.name = name;
	this.age = age;
	this.sayHello = function(){
		console.log("Hey, my name is " + this.name);
	};
};

var Sam = new Person("Sam", 26);
Sam.sayHello();

```

RUBY

Ruby you have to make methods to get your variables within a class. Getter and Setters

```
class Person
	def initialize(name, age)
		@name = name
		@age = age
	end
	def say_hello
		puts "Hi, my name is #{@name}"
	end
	def name #getters
		return @name
	end
	def age #getter
		return @age
	end
	def name = (name) #setter
		@name = name
	end
end

Sam = Person.new("Sam", 26)
Sam.say_hello

```

```
Sam.name # =>Sam
Sam.name = "Crawford"
Sam.name #=>Crawford
```

THIS IS THE SHORT HAND WAY TO WRITE THE ABOVE AND IT DOES THE SAME THING

```
class Person
	attr_accessor :name, :age
	def initialize(name, age)
		@name = name
		@age = age
	end
	def say_hello
		puts "Hi, my name is #{@name}"
	end
end

Sam = Person.new("Sam", 26)
Sam.say_hello

```
THESE ALLOW READ AND WRITE, READ, AND WRITE ACCESS

```
attr_accessor :name, :age
attr_reader
attr_writer
```
THIS to_s  method, if you ever put to_s and then just puts the name of the new person (puts Sam) it will puts the string within that.Think you could make it a hash inside so when you call sam it will put that method. MUST BE to_s

```
class Person
	attr_accessor :name, :age
	# attr_reader
	#attr_writer
	def initialize(name, age)
		@name = name
		@age = age
	end
	def to_s
		"Hello #{@name}, This method puts when you put puts this class"
	end
end

Sam = Person.new("Sam", 26)

puts Sam
	
```

###Inheritance

THIS IS THE LONG HAND WAY

```
class Dog
	attr_accessor :name, :owner
	def initialize(name, owner)
		@name = name
		@owner = owner
	end
	def bark
		puts "bark"
	end
end

class Cat
	attr_accessor :name, :owner
	def initialize(name, owner)
		@name = name
		@owner = owner
	end
	def meow
		puts "meow"
	end
end
```

IF YOU HAVE CLASSES THAT HAVE SOME SIMILAR THINGS YOU CAN USE INHERITANCE

```
class Animal
	attr_accessor :name, :owner
	def initialize(name, owner)
		@name = name
		@owner = owner
	end
end

class Dog < Animal
	def bark
		puts "bark"
	end
end

class Cat < Animal
	def bark
		puts "meow"
	end
end

waffles = Dog.new("Waffles", "Peach")
puts waffles.name
puts waffle.owner
waffle.bark

waffles.owner = "Tiffany" #now the owner is Tiffany

```

THIS ONE OVERRIDES THE ORIGINAL CLASS 'super' is the parent class

```
class Animal
 	attr_accessor :name, :owner, :type
 	def initialize(name, owner, :type)
 		@name = name
 		@owner = owner
 		@type = type
 	end
 end


 class Cat < Animal
 	def initialze(name, owner)
 		super(name, owner, "Cat")
 	end
 	def meow
 		puts "meow"
 	end
 end
```

EXAMPLE:

```
class Food
	def eat
		puts "Eating now..."
	end
end


class Pizza < Food
	def taste
		puts "Cowabunga!"
	end
end


class Asparagus < Food
	def taste
		puts "Yuck!"
	end
end

a = Asparagus.new
p = Pizza.new

a.taste
a.eat
p.taste
p.eat

```