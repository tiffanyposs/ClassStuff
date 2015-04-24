# This program takes arguments run it with ruby [filename]

puts "what is your name?"
	name = gets.chomp
puts "hello, #{name}, where are you from?"
	state = gets.chomp.upcase

if state == "NY"
	puts "welcome to the Empire State"
elsif state == "NJ"
	puts "You must merge well"
else
	puts "Whaaaa?"
end