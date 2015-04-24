require 'sinatra'
require 'json'
require 'pry'

dwarfs = {
	0=> {
		id:0,
		age: 43,
		name:"Doc",
	},
	1=> {
		id:1,
		age: 30,
		name:"Grumpy",
	},
	2=> {
		id:2,
		age: 23,
		name:"Happy",
	},
	3=> {
		id:3,
		age: 19,
		name:"Sleepy",
	},
	4=> {
		id:4,
		age: 23,
		name:"Bashful",
	},
	5=> {
		id:5,
		age: 17,
		name:"Sneezy",
	},
	6=> {
		id:6,
		age: 21,
		name:"Dopey",
	}
}

counter = 7


get '/api' do 
	content_type :json
	dwarfs.to_json	
end

#create
get '/dwarfs' do
	erb :index, locals: {dwarfs: dwarfs}
end

#add;
post '/dwarf' do
	newdwarf = {
		id: counter,
		age: params["age"],
		name: params["name"],
	}

	dwarfs[counter] = newdwarf
	counter += 1
	#this redirects to a different page
	redirect '/dwarfs'
end

#view single pet
get '/dwarf/:id' do
	thisdwarf = dwarfs[params[:id].to_i]
erb :show, locals: {thisdwarf: thisdwarf}
end

#update pets
put '/dwarf/:id' do
	dwarf = dwarfs[params[:id].to_i]
	dwarf[:name] = params["newname"]
	redirect '/dwarfs'
end

delete '/dwarf/:id' do
	dwarfs.delete(params[:id].to_i)
	redirect '/dwarfs'
end



