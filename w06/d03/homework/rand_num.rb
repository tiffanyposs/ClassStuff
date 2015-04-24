#this chooses a randome number 1 - 100 and says if its between two numbers greater than or less than

puts "please enter a number 1 - 100"
	num_one = gets.chomp
puts "please enter another number 1 - 100"
	num_two = gets.chomp

def temp(x, y)
	nums_array = []
	random_num = rand(100)
	x = x.to_i
	y = y.to_i
	nums_array.push(random_num, x , y)
	nums_array.sort!
	if random_num < x && random_num < y
		return "#{random_num} is too cold. #{nums_array}"
	elsif random_num > x && random_num > y
		return "#{random_num} is too hot. #{nums_array}"
	else
		return "#{random_num} is just right. #{nums_array}"
	end
end

puts temp(num_one, num_two)