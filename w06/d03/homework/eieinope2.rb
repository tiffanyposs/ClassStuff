def vowelChecker

	puts ("Please, enter a word.")
	word = gets.chomp
	counter = 0
	vowel_array = []
	index_array = []

	word.split("").each do |i|
	  	if i == "a" || i == "e" || i == "i" || i == "o" || i == "u"
	  		index = word.index(i)
	  		counter+=1
	  		index_array << index
	  		vowel_array << i
		end
	end

	x = 0
	y = 1
	nextto_counter = 0

	while y < index_array.length
		second = index_array[y]
		first = index_array[x]
		math =  second - first
		if math == 1
			nextto_counter+=1
			x+=1
			y+=1
		else
			x+=1
			y+=1	
		end
	end


	if nextto_counter > 0
		return "Nope"
	else
		return "Yep"
	end

end

puts vowelChecker()


