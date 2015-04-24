require 'sinatra'
require 'json'
require 'sqlite3'
require 'pry'


db = SQLite3::Database.new "petulance.db"


#create
get '/pets' do
	pets = db.execute("SELECT * FROM pets")
	erb :index, locals: {pets: pets}
end

#read
post '/pet' do
	newpet = [params["name"], params["type"]]
	db.execute("INSERT INTO pets(name, type) VALUES (?, ?)", newpet)
	redirect '/pets'
end


#view single pet
get '/pet/:id' do
	thispet = db.execute("SELECT * FROM pets WHERE id=(?)", params[:id].to_i)
erb :show, locals: {thispet: thispet}
end


#update pets
put '/pet/:id' do
	db.execute("UPDATE pets SET name=(?) WHERE id=(?)", params["newname"], params[:id].to_i)
	redirect '/pets'
end


delete '/pet/:id' do
	db.execute("DELETE FROM pets WHERE id=(?)", params[:id].to_i)
	redirect '/pets'
end

