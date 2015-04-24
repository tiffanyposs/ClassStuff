require 'sinatra'

get '/' do

    name = ["Karl", "Tiffany", "Dawn", "Jessica", "Curtis"].sample
    color = ["blue", "red", "black", "purple", "green"].sample
    hometown = ["LA", "Boston", "Chicago", "New York City", "Houston"].sample
    band = ["The Doors", "Rolling Stones", "Maroon Five", "Cher", "B-52s"].sample
    artist = ["Monet", "Picasso", "Andy Worhol"].sample
    food = ["Pizza", "Candy", "Thai Food", "Greek Food", "Turkish Food"].sample

	erb :hw_index, locals: {name: name, color: color, hometown: hometown,
	band: band, artist: artist, food: food}
end








# require 'sinatra'

# celeb = ["Beyonce", "George Cloony", "Brad Pitt", "Angelina Jolie",
# "Jon Travolta", "Opera", "Cher", "Lady Gaga"]

# get '/' do
# 	my_string = "<html><body><ul>"
# 	celeb.each do |person|
# 		my_string += "<li> #{person} </li>"
# 	end
# 	my_string += "</ul></body></html>"
	# erb :celeb_index, locals: {list: my_string}
# end





# require 'sinatra'

# get '/:id1/:id2' do 
# 	width = (params[:id1]).to_i
# 	height = (params[:id2]).to_i
# 	erb :cats_index_two, locals: {width: width, height: height}	
# end