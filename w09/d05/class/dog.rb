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


## OVERRIDING SUPER CLASSES
# class Animal
# 	attr_accessor :name, :owner, :type
# 	def initialize(name, owner, :type)
# 		@name = name
# 		@owner = owner
# 		@type = type
# 	end
# end


# class Cat < Animal
# 	def initialze(name, owner)
# 		super(name, owner, "Cat")
# 	end
# 	def meow
# 		puts "meow"
# 	end
# end




## LONG HAND

# class Dog
# 	attr_accessor :name, :owner
# 	def initialize(name, owner)
# 		@name = name
# 		@owner = owner
# 	end
# 	def bark
# 		puts "bark"
# 	end
# end

# class Cat
# 	attr_accessor :name, :owner
# 	def initialize(name, owner)
# 		@name = name
# 		@owner = owner
# 	end
# 	def meow
# 		puts "meow"
# 	end
# end

