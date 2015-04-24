#In a method you cannot access a variable outside of a 
#method

name = "Sam"

def say_hello
	puts "Hey, #{name}"
end

#in a block (do...end) you can access it
require 'sinatra'

name = "Sam"
get '/' do
	"<h1> Hello, #{name} </h1>"
end

########################

# this adds to the string each time so it'll be one long
# string. You could even remove the return statement
get '/' do
	my_string = "<html><body><ul>"
	my_string += "<li>Sonny</li>"
	my_string += "<li>Cher</li>"
	my_string += "</ul></body></html>"
	return my_string
end

#you can loop through an array so it will generate a list
#this will be more convienent for longer arrays
get '/' do
	people= ["Sonny", "Cher"]
	my_string = "<html><body><ul>"

	people.each do |person|
		my_string += "<li> #{person} </li>"
	end
	my_string += "</ul></body></html>"
end
