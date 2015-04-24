puts "please write something"
	string = gets.chomp
	array = string.split(" ")
	even_array = []
	three_index_even = []
	odd_array = []

	for each in array

		if each.length % 2 == 0 && array.index(each) % 3 == 0
			three_index_even.push(each)
		end

		if each.length % 2 == 0
			even_array.push(each)
		else
			odd_array.push(each)
		end
		
	end

print even_array
print three_index_even
print odd_array