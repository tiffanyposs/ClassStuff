#below is a version of fizzbuzz
counter = 1
array = []

while counter <= 100
	array.push(counter)
	counter +=1
end

fizzbuzz = array.map{|each|
	number= each.to_i
	if number % 3 == 0 && number % 5 == 0
		each = "fizzbuzz again, really?"
	
	elsif number % 3 == 0
		each = "fizz"*number
	
	elsif number % 5 == 0
		each = "bu" +"z"*number
	
	else
		each = each
end
}

puts fizzbuzz



#below is regular fizzbuzz

# counter = 1
# array = []

# while counter <= 100
# 	array.push(counter)
# 	counter +=1
# end

# fizzbuzz = array.map{|each|
# 	number= each.to_i
# 	if number % 3 == 0 && number % 5 == 0
# 		each = "fizzbuzz"
	
# 	elsif number % 3 == 0
# 		each = "fizz"
	
# 	elsif number % 5 == 0
# 		each = "buzz"
	
# 	else
# 		each = each
# end
# }

# puts fizzbuzz