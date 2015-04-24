puts "enter a number or end"
number = ""
array = []

while number != "end"
	number = gets.chomp
	if number != "end"
	array.push(number)
end
end

if number == "end"
	squared = array.map{|each| each.to_i ** 2}
end

puts squared