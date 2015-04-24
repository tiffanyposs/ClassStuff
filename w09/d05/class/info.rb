#EXAMPLE 1
class Person
	attr_accessor :name, :age
	# attr_reader
	#attr_writer
	def initialize(name, age)
		@name = name
		@age = age
	end
	def say_hello
		puts "Hi, my name is #{@name}"
	end
	def to_s
		"Hello #{@name}, This method puts when you put puts this class"
	end
end

Sam = Person.new("Sam", 26)
# Sam.say_hello

puts Sam
 

# #EXAMPLE 1
# class Person
# 	def initialize(name, age)
# 		@name = name
# 		@age = age
# 	end
# 	def say_hello
# 		puts "Hi, my name is #{@name}"
# 	end
# 	def name #getters
# 		return @name
# 	end
# 	def age #getter
# 		return @age
# 	end
# 	def name = (name) #setter
# 		@name = name
# 	end
# end

# Sam = Person.new("Sam", 26)
# Sam.say_hello