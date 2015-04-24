=,vfan[r# irb in terminal to activate ruby terminal name

# variable has no var in front. 
name = "Tiffany"

# In js you would have to do, but is also valid ruby

“Hello” + name

# In ruby (but will also do it the js way)

“Hello, #{name}”


# ARRAY
arr = [] #empty array
arr.push(“hello”) #puts hello string into the array
puts arr #logs the arr content
arr[1] = “world” # make the second spot world in the array
arr[0] = 1 #
arr.delete_at(1)
arr.push(2)
arr.pop
arr << "c" << "d" << [3, 4]
arr[3][1]


# empty
# ["hello"]
# ["hello"]
# [hello, world]
# [1, world]
# [1]
# [1, 2]
# [1]
# [1 , "c", "d", [3, 4]]
# 4

########
#HASHES
########

hash = {}	#makes empty hash
hash[:a] = 1 #makes a key value pair
puts hash
hash_two = {a:1, b:2} #another way to make a hash
puts hash_two[:a] #logs the value of a inside of hash_two
hash_two.delete(:b) #deletes the b key value pair

#hash = {}
#hash = {:a=>1}
#hash = {:a=>1}
#hash_two = {:a=>1, :b=>2}
#{a:1}
#hash_two = {:a=>1}


########
#IF STATEMENTS
########



puts "what is your name?"
	name = gets.chomp
puts "hello, #{name}, where are you from?"
	state = gets.chomp.upcase

if state == "NY"
	puts "welcome to the Empire State"
elsif state == "NJ"
	puts "You must merge well"
else
	puts "Whaaaa?"
end

###########
#While Loops
###########

i = 0
while(i < 10)
	puts i
	i += 1
end

#or also works

i = 0
while i < 10
	puts i
	i += 1
end


#######
#FOR LOOPS
#######
#this is like a for each statement, prints out each

numbers = [1, 2, 3, 4, 5]
	for number in numbers
		puts number
	end


##########
#hash with for loops
##########

hash = {a:1, b:2}
	for x in hash
		puts "hello #{x}"
	end
#hello [:a, 1]
#hello [:b, 2]



hash = {a:1, b:2}
	for x in hash
		puts "hello #{x[1]}"
	end	
#hello 1
#hello 2



#########
# METHODS (function)
#########


#THIS IS HOW YOU MAKE A METHOD
#return statement is optional
def generate_welcome_string(name)
	prefix = "Hello"
	postfix = "Have a nice day."
	welcome_string = prefix + name + postfix
	return welcome_string
end


#Javascript version

# var generate_welcome_string = function(name){
# 	var prefix = "Hello";
# 	var postfix = "Have a nice day.";
# 	var welcome_string = prefix + name + postfix;
# 	return welcome_string;
# };

