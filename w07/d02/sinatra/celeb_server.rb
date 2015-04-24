require 'sinatra'

celeb = ["Beyonce", "George Cloony", "Brad Pitt", "Angelina Jolie",
"Jon Travolta", "Opera", "Cher", "Lady Gaga"]

get '/' do
	my_string = "<html><body><ul>"
	celeb.each do |person|
		my_string += "<li> #{person} </li>"
	end
	my_string += "</ul></body></html>"
	erb :celeb_index, locals: {list: my_string}
end


#this server compiles a list of celebraties from the celeb array


#this is also another way to write an array of strins
# celeb = %w{Beyonce George\ Cloony Brad\ Pitt Angelina\ Jolie
# Jon\ Travolta Opera Cher Lady\ Gaga}