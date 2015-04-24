require 'sinatra'
require 'json'
require 'httparty'
require 'pry'

get '/:lat/:long' do 
	lat = params[:lat]
	long = params[:long]
	erb(:index, locals: {lat: lat, long: long})
end


# user must enter a long and lat in the url then it will render a 
# map on that location on the browser from google maps