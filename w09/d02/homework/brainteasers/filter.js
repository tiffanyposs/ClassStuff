//sort the array so the first numbers will be 0 and the rest will come after

var test_array = [1, 0, 1, 0, 54, 23, 65, 0];

var zeroFront = function(array){
	var sorted = []
	array.forEach(function(each){
		if(each === 0){
			sorted.splice(0, 0, each);
		}
		else{
			sorted.push(each)
		}
	})
	return sorted
}

console.log(zeroFront(test_array));

// // Solution 1
// var zeroFront = function(array){
// 	var sorted = []
// 	array.forEach(function(each){
// 		if(each === 0){
// 			sorted.push(each);
// 		}
// 	})
// 	array.forEach(function(each){
// 		if(each != 0){
// 			sorted.push(each);
// 		}
// 	})
// 	return sorted;
// }

