require 'active_record'


class House < ActiveRecord::Base
	def characters
		Character.where({house_id: self.id})
	end
end




# slythering. characters will go
# thru the characters table and return all characters 
# that have the same house_id and slythering's id
#(these are joins)