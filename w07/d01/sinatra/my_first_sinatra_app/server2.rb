#gem install sinatra to install it

require 'sinatra'

# get '/favicon.ico' do
# end

get '/' do 
	my_name = "Tiffany"
	erb :index, locals: {name: my_name}
end
#if the path is empty it will replace the erb file code with tiffany

get '/goodbye' do
	not_a_name= 'goodbye'
	erb :index, locals: {name: not_a_name}
end
#if the path is "/goodbye" it will replace the erb file code with goodbye

get '/google' do
	google = '<a href=http://www.google.com>Google</a>'
	erb :index, locals: {name: google}
end
#you can also put html in your string, like this google one

get '/:id' do
	puts params[:id]
	path = params[:id].upcase
	path_num = (params[:id]).length
	counter = 0
	repeated = ""
	while counter < path_num
		repeated+=path
		counter += 1
	end
	erb :index, locals: {name: repeated}
end
#this will repeat the path word the amount of times the length of the world.



#this is the basic way to replace on the browswer the path
# get '/:id' do
# 	puts params
# 	path = params[:id]
# 	erb :index, locals: {name: path}
# end



#this assigns a id as param when you write it like this
#params is the path(like get url in js) pat

# if you go to just localhost:4567 if will do my hello world, Tiffany
# 	if you do localhost:4567/goodbye it will do Hello World, goodbye
# :index is the file name
#