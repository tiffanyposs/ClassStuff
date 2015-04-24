#get prime number 1-100

prime = [];
i = 1.0;
x = 1.0;
counter = 0;

while x <= 100.0

	while i <= 100.0
	num = x/i
    floor = num.floor
		if num - floor == 0
			counter+=1
		end
	i+=1
	end

	if counter == 2
		prime.push(x.floor)
	end

	counter = 0
	i = 1.0
	x += 1.0
end

puts prime
