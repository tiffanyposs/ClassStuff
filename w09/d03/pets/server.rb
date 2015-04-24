require 'sinatra'
require 'json'
require 'sqlite3'
require 'pry'


db = SQLite3::Database.new "pets_data.db"


#create
get '/pets' do
	pets = db.execute("SELECT * FROM pets")
	erb :index, locals: {pets: pets}
end

#read
post '/pet' do
	db.execute("INSERT INTO pets(name, type) VALUES (?, ?)", params["name"], params["type"])
	redirect '/pets'
end

# #view single pet
# get '/pet/:id' do
# 	thispet = pets[params[:id].to_i]
# erb :show, locals: {thispet: thispet}
# end



# #update pets
# put '/pet/:id' do
# 	pet = pets[params[:id].to_i]
# 	pet[:name] = params["newname"]
# 	redirect '/pets'
# end

# delete '/pet/:id' do
# 	pets.delete(params[:id].to_i)
# 	redirect '/pets'
# end

