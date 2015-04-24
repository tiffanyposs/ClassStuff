#You must run the server for this to work.

require 'httparty'

address = "http://localhost:3000/animals/"

response = HTTParty.get(address)

p "What animal are you looking for?"
animal = gets.chomp


info = response[animal]

if info == nil
	p "That animal doesn't exist"
else
	p info
end