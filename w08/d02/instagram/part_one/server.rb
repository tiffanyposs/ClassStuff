# <!-- example of a sinatra server -->
require 'httparty'
require 'sinatra'
require 'json'
require 'pry'

url = "https://api.instagram.com/v1/tags/puppies/media/recent?client_id=49df250e4b714bf193b156a21e93cdfa"
response = HTTParty.get(url)


image_array = []
image = response['data'][0]['images']['standard_resolution']['url']

i = 0
while i < response['data'].length  do
	array_string = response['data'][i]['images']['standard_resolution']['url']
   image_array.push(array_string)
   i +=1
end



get '/' do 
	erb(:index, locals: {image_array: image_array})
end

puts image_array