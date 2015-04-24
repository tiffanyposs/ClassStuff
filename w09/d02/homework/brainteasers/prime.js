//get prime  numbers 1 - 100

var prime = [];
var i = 1;
var x = 1;
var counter = 0;

while(x <= 100){
	while(i <= x - 1){
		var num = x/i;
		if(num.toString().indexOf(".") === -1){
			counter++;
		}
		i++;
	}
	if(counter === 1){
		prime.push(x);
	}
	counter = 0;
	i = 1;
	x++;
}


prime.forEach(function(each){
	console.log(each);
})