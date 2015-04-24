// this program takes two arguments. It will randomly select a number
//1-100 and will say its too hot too cold or just right depending
// if that number is above your two numbers, below, or between

var num1 = process.argv[2];
var num2 = process.argv[3];


var middleNumber = function(x, y){
	var random_num = Math.random()*100;
	console.log(random_num);

	if(x < random_num && y < random_num){
		console.log("too cold")
	}

	if(x > random_num && y > random_num){
		console.log("too hot")
	}

	if(x > y && random_num < x && random_num > y){
		console.log("just right")
	}

	if(y > x && random_num < y && random_num > x){
		console.log("just right")
	}
}

middleNumber(num1, num2);