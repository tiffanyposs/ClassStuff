#gem install sinatra to install it
#defaults to 4567 local host

require 'sinatra'

get '/coin_toss' do
	rand_num = rand(0..100)
	if rand_num > 50
		response = "Heads"
	else
		response = "Tails"
	end
	erb :chance, locals: {name: response}
end


get '/dice_roll' do
	response = rand(1..6)
	erb :chance, locals: {name: response}
end


get '/magic8ball/:id' do
	question = params[:id]
	answers =[ "It is certain", "It is decidedly so", "Without a doubt",
	"Yes definitely", "You may rely on it", "As I see it yes",
	"Most likely", "Outlook good", "Yes", "Signs point to yes",
	"Reply hazy try again", "Ask again later", "Better not tell you now",
	"Cannot predict now", "Concentrate and ask again", "Don't count on it",
	"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
	response = "#{question}? #{answers.sample}."
	erb :chance, locals: {name: response}
end


get '/rps/rock' do
	array = ["rock", "paper", "scissors"]
	computer = array.sample
	player= array.sample
	if computer == "rock"
		if player == "paper"
			score = "You Win"
		elsif player == "scissors"
			score = "You Lose"
		else
			score = "You Tie"
		end
	end
	if computer == "paper"
		if player == "rock"
			score = "You Lose"
		elsif player == "scissors"
			score = "You Win"
		else
			score = "You Tie"
		end
	end
	if computer == "scissors"
		if player == "rock"
			score = "You Win"
		elsif player == "paper"
			score = "You Lose"
		else
			score = "You Tie"
		end
	end
	response= "<p>The computer gets #{computer}</p><p>You get #{player}</p><p>#{score}</p>"
	erb :chance, locals: {name: response}
end


get "*" do
	response = "To Play a game go to /dice_roll, /coin_toss, /magic8ball, or /rps/rock, "
	erb :chance, locals: {name: response}
end

