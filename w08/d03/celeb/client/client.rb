require 'httparty'

puts "Give me an IP Address"
address = gets.chomp

response = HTTParty.get(address)
puts response

def prompt(address)

counter = 0
while counter < 1

puts "Whats celebrity might this be?"
answer = gets.chomp

response_two = HTTParty.get(address + answer)
puts response_two

if response_two['correct']
counter += 1

elsif response_two['incorrect']
puts response_two['incorrect']
end

end
end

prompt(address)
exit
# counter = 0
# prompt()
# while counter == 0
	
# 	if prompt.msg == "NICE JOB"
# 		counter+=1
# 	end
# 	if prompt.msg == "hmm, try again"
# 	prompt()
# 	end
# end

