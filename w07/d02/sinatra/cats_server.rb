require 'sinatra'

get '/:id1/:id2' do
	width = params[:id1]
	height = params[:id2]
	erb :cats_index, locals: {width: width, height: height}
end


#this works with the cats_index.erb file to generate 15 images
#of cats with an increased height