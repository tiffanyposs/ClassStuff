var fs = require('fs');


fs.readFile("server1.js", function(err, data) {
  if (err) {
    console.log("oh no!");
    console.log(err);
  } else {
    var text = data.toString();
    var arr = text.split("\n");
    var reverse = arr.reverse();

    console.log(arr.length);



    reverse.forEach(function(each){
    	console.log(each);
    });
  }
})


//this will count the number of lines in the server.js file;
// var text makes a string of the data, then var array splits
// the lines on a new line \n into an array, then we console.log
// the lenght of that array to count the lines

// this will print the attached file in reverse in the forEach loop




//another way to do it
// var fs = require('fs');

// fs.readFile("server1.js", function (err, data) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
//     	var text = data.toString();
//     	var arr = text.split("\n");
//     	var reverse = arr.reverse();
//     	var newStr = reverse.join("\n");
//     	console.log(newStr);
//   	}
// });
 

// //this is tyler's solution
// var fs = require('fs');

// fs.readFile('server1.txt', function(err, data){
//   //data will be contents of file
//   if(err){
//     console.log("try again!")
//     console.log(err);
//   } else {
//     var text = data.toString();
//     var counter = 0;
//     for (var i = 0; i < text.length; i++){
//       if (text.charAt(i) == "\n") {
//         counter++;
//       }
//     }
//   }
//   console.log(counter);
// });