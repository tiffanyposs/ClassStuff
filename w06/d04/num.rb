numbers = [1,2,3,4,5]
mult_by_3 = numbers.map{|num| num*3}
mult_by_5 = numbers.map{|num| num*5}

print numbers
print mult_by_3
print mult_by_5

# .map returns a new array, going through each and applying it to it
