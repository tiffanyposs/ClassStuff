p "What is your favorite letter"
letter = gets.chomp.downcase

candies = ["Starburst", "Lifesavers", "Snickers", "Milky Way", "Three Musketeers", "Skittles"]

down_candies = []
candies.each do |c|
	down_candies.push(c.downcase)
end

letter_candy = down_candies.select{|x|
	x.include?(letter)
}

if letter_candy.length > 0
	p letter_candy
else
	p "No candy for you!"
end



#First solution
# candies = ["Starburst", "Lifesavers", "Snickers", "Milky Way", "Three Musketeers", "Skittles"]


# candies.each do |candy|
# 	p candy
# end

# upcase_candy = candies.map{|candy| candy.upcase}

# p upcase_candy