var alphabet = {}

var string = "abcdefghijklmnopqrstuvwxyz";
var alpha_array = string.split("");
var i = 1;

alpha_array.forEach(function(each){
	alphabet[each] = i;
	i++;
})

console.log(alphabet);

var countr = function(string, alpha){
	var total = 0;
	string.split('').forEach(function(n){
		if(n != " "){
			var num = alpha[n.toLowerCase()];
			total += num
		}
	})
	return total
}

console.log(countr("dog", alphabet))

