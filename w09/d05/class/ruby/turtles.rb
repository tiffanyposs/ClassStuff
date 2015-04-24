class Turtle
	attr_accessor :name, :color, :weapon
	def initialize(name, color, weapon)
		@name = name
		@color = color
		@weapon = weapon
	end
	def who_am_i
		puts "Hi, my name is #{@name}, I wear a #{@color} bandana and use #{@weapon} to fight."
	end
end

Leonardo = Turtle.new("Leonardo", "blue", "Swords")
Donatello = Turtle.new("Donatello", "purple", "Bo")
Raphael = Turtle.new("Raphael", "red", "Sai")
Michelangelo = Turtle.new("Michelangelo", "orange", "Nunchucks")


Leonardo.who_am_i
Donatello.who_am_i
Raphael.who_am_i
Michelangelo.who_am_i