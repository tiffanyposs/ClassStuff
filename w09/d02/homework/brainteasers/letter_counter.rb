alphabet = {}
i = 1

("a".."z").each { |letter| 
	alphabet[letter] = i
	i+=1 }

puts alphabet

def countr(string, alpha)
	total = 0
	string.split("").each do |n|
		if n != " "
		num = alpha[n.downcase]
		total+=num
		end
	end
	return total
end

puts countr("Dog", alphabet)