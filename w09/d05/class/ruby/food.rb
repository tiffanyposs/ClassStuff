class Food
	def eat
		puts "Eating now..."
	end
end


class Pizza < Food
	def taste
		puts "Cowabunga!"
	end
end


class Asparagus < Food
	def taste
		puts "Yuck!"
	end
end

a = Asparagus.new
p = Pizza.new

a.taste
a.eat
p.taste
p.eat

