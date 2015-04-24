# this program asks for a number and a string
# then if the number is even it will print the string regular if not
# it will print it in reverse

puts ("Please, enter a number.")
number = gets.chomp

puts ("Please, enter some words.")
string = gets.chomp

def evenOdd(num, string)
	if num.to_i % 2 == 0
		return string
	else
		return string.reverse
	end
end

 puts evenOdd(number, string)