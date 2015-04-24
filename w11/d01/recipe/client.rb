require 'httparty'
require 'active_record'
require 'sqlite3'

puts HTTParty.get("http://localhost:3000/entries.json")

HTTParty.post("http://localhost:3000/entries",
	{entry: {"name" => "Tiffany", "ingredients" => "Stuff", "instructions" => "Make it!"}})
# # puts "Give me an Address"
# # address = gets.chomp

# # response = HTTParty.get(address)
# # puts response

# address = "http://localhost:3000/entries.json"
# # address_two = "http://localhost:3000/entries/"

# # response = HTTParty.get(ad)

# puts "what would you like to do? (C)reate, (R)ead, (U)pdate, or (D)estroy?"
# answer = gets.chomp.downcase

# def Create(address)
# 	HTTParty.post("http://localhost:3000/entries/new",
#   { "entry" =>{
#     "name" => "Candy",
#     "ingredients" => "Sugar, Water, Flavoring",
#     "instructions" => "Mix together, then allow to boil until done"
#   }})
# end

# def Read(address)
# 	puts "what recipe are you looking for? Or type 'all' to see all recipe names."
# 	recipe = gets.chomp.downcase
# 	all =  HTTParty.get(address)
# 	if recipe == 'all'
# 		x = 0
# 		while x < all.length 
# 			puts all[x]["name"]
# 			x+=1
# 		end
# 	else
# 		y = 0
# 		counter = 0
# 		while y < all.length 
# 			if all[y]["name"].downcase == recipe
# 				puts all[y]
# 				counter += 1
# 			end
# 			y+=1
# 		end
# 		if counter == 0
# 			puts "That recipe can't be found!"
# 		end		
# 	end
# end

# if answer == 'c'
# 	Create(address)
# end

# if answer == 'r'
# 	Read(address)
# end

# if answer == 'u'
# end

# if answer == 'd'
# end