var numbers = [1,2,3,4,5,6];

var evens = numbers.filter(function(n){
	return n % 2 === 0;
});

console.log(evens)

//this returns only the elements within an array 
// that fit the return inside of the functions