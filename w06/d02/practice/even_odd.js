var string = process.argv[2];
var array = string.split(" ");

var even = [];
var even_three = [];
var odd = [];

array.forEach(function(each){
	if(each.length % 2 === 0 && array.indexOf(each) % 3 === 0){
		even_three.push(each);
		even.push(each);
	}
	else if(each.length % 2 === 0){
		even.push(each);
	}
	else{
		odd.push(each);
	}
})

console.log(even);
console.log(odd);
console.log(even_three);


// var stringArr = process.argv
// for(var i = 2; i<stringArr.length; i++){
// 	if(stringArr[i].length% 2 === 0){
// 		console.log(stringArr[i])
// 	}
// }