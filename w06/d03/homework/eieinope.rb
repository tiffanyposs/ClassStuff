puts ("Please, enter a word.")
word = gets.chomp
counter = 0

word.split("").each do |i|
  	if i == "a" || i == "e" || i == "i" || i == "o" || i == "u"
  		counter+=1
	end
end



if counter >= 2
	puts "It checks out."
else
	puts "It doesn't check out."
end
