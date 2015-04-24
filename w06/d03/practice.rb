prefix = "hey"

def generate_welcome_string(name)
	prefix = "Hello"
	postfix = "Have a nice day."
	prefix +", "+ name +". "+ postfix
	# "#{prefix} #{name} #{postfix}"  #same as above line
end

puts generate_welcome_string("sam")
puts prefix #hey

# def generate_welcome_string(name)
# 	prefix = "Hello"
# 	postfix = "Have a nice day."
# 	welcome_string = prefix + name + postfix
# 	return welcome_string
# end



#Javascript the same

# var generate_welcome_string = function(name){
# 	var prefix = "Hello";
# 	var postfix = "Have a nice day.";
# 	var welcome_string = prefix + name + postfix;
# 	return welcome_string;
# };