// this program takes two arguments. It will randomly select a number
//1-100  middleNumber will say its too hot too cold or just right depending
// if that number is above your two numbers, below, or between

//lowToHigh prints out the three numbers lowest to hightest


var num1 = process.argv[2];
var num2 = process.argv[3];	

var random_num = Math.floor(Math.random()*100);
console.log(random_num);

	//says if one number is greater than 2 other numbers, less than, or between
	var middleNumber = function(x, y, num){

		if(x < num && y < num){
			console.log("too cold")
		}

		if(x > num && y > num){
			console.log("too hot")
		}

		if(x > y && num < x && num > y){
			console.log("just right")
		}

		if(y > x && num < y && num > x){
			console.log("just right")
		}

	}


	//puts 3 numbers from lowest to highest, one number is 
	var lowToHigh = function(x, y, num){

		var lowHigh = ""

		if(num > x && num > y){
			if(x > y){
				lowHigh = y + ", " + x + ", " + num;
			}
			if(y > x){
				lowHigh = x + ", " + y + ", " + num;
			}
		}


		if(x > y && x > num){
			if(y > num){
				lowHigh = num + ", " + y + ", " + x;
			}
			if(num > y){
				lowHigh = y + ", " + num + ", " + x;
			}
		}


		if(y > x && y > num){
			if(x > num){
				lowHigh = num + ", " + x + ", " + y;
			}
			if(num > x){
				lowHigh = x + ", " + num + ", " + y;
			}
		}

		console.log(lowHigh);
	}


middleNumber(num1, num2, random_num);
lowToHigh(num1, num2, random_num);




//Crawford better answer
// stuck in the middle with args
// var arg1 = parseInt(process.argv[2])
// var arg2 = parseInt(process.argv[3])
// var lower
// var upper
// if (arg1 > arg2) {
//   upper = arg1;
//   lower = arg2;
// } else {
//   upper = arg2;
//   lower = arg1;
// }

// var rando = Math.floor(Math.random()*10)
// if (lower > rando) {
//   console.log("too cold")
//   console.log(rando + " " + lower + " " + upper)
// } else if (upper < rando) {
//   console.log("too hot")
//   console.log(lower + " " + upper + " " + rando)
// } else {
//   console.log("just right")
//   console.log(lower + " " + rando + " " + upper)
// }



