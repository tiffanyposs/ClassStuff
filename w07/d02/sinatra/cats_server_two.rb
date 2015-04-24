require 'sinatra'

get '/:id1/:id2' do 
	width = (params[:id1]).to_i
	height = (params[:id2]).to_i
	erb :cats_index_two, locals: {width: width, height: height}	
end

# rachels solution