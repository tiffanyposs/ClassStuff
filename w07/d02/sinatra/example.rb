require 'sinatra'

get '/' do
	people = ["Sonny", "Cher", "Brad Pitt", "George Cloony"]
	erb :example, locals: {names: people}
end

#this sends people to the erb file then the erb file
#renders it to a list