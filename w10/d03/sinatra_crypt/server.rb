require 'sinatra'
require 'json'
require 'bcrypt'
require 'sqlite3'

db = SQLite3::Database.new "data.db"

use Rack::Session::Pool, :cookie_only => false

# my_password = BCrypt::Password.create("my password")


# secret_password = ''
# json = ''
# File.open('secret.json', 'r') do |f|
#   f.each_line do |line|
#     json << line
#   end
# end
# json_hash = JSON.parse(json)
# secret_password = json_hash['password']


def authenticated?
  session[:valid_user] == true
end

get '/' do
  send_file 'index.html'
end

post '/user' do
	username = params[:username]
	password = params[:password]
	confirm_password = params[:confirm_password]
	if password == confirm_password
		hash = BCrypt::Password.create(password)
		puts hash
		db.execute("INSERT INTO users(username, password) VALUES (?, ?)", username, hash)
		session[:valid_user] = true
		redirect '/secret_page'
	else
		redirect '/'
	end
end


post '/session' do
	username = params[:username]
	password = params[:password]
	user = db.execute('SELECT * FROM users WHERE username = ?', username)
	puts "This is your user #{user[0][2]}"
  if BCrypt::Password.new(user[0][2]) == password
    session[:valid_user] = true
    redirect '/secret_page'
  else
    redirect '/'
  end
end



get '/secret_page' do
  if authenticated?
    send_file 'secret.html'
  else
    redirect '/'
  end
end

get '/secret_page2' do
  if authenticated?
    send_file 'secret_2.html'
  else
    redirect '/'
  end
end