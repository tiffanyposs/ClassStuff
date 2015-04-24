require 'pry'

def makeChocolate(small, big, goal)

	new_goal = goal
	# p new_goal
	big_weight = big
	small_weight = small
	while new_goal > 5 && big_weight > 0
		new_goal -= 5
		big_weight -= 1
	end
	if new_goal > small_weight # if theres not enough
		return - 1
	else
		return new_goal
	end

end


p makeChocolate(4, 1, 9)
p makeChocolate(2, 2, 8)
p makeChocolate(4, 1, 7)
p makeChocolate(3, 3, 17)
p makeChocolate(3, 3, 19)