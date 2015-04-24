def mult_five(number)
	return number % 5 == 0
end

get_fives = true

while get_fives
	puts "Enter a number or quit"
	number = gets.chomp
	if number == "quit"
		puts "goodbye"
		get_fives = false
	else
		multiples_of_five = mult_five(number.to_i)
	if multiples_of_five
		puts number + " is a multiple of 5"
	else
		puts number + " is not a multiple of 5"
	end
end
end


# def mult_five()
# 	puts "enter a number or write quit to exit"
# 	while number = gets.chomp
# 		if number == "quit"
# 			return "bye-bye"
# 		elsif number.to_i % 5 == 0
# 			return "true"
# 		else
# 			return "false"
# 		end
# 	end
# end

# puts mult_five()

