// This program takes a string and number, if the number is even it will
// log the original string, if it is odd it will reverse that string and 
// log it

var string = process.argv[2];
var number = process.argv[3];

var toLog = function(str, num){
	if(num % 2 === 0){
		console.log(str);
	}
	else{
		var string_array = str.split("").reverse();
		var new_string = string_array.join("");
		console.log(new_string); 
	}
}

toLog(string, number)