var fs = require('fs');


var exist_file = process.argv[2];
var new_file = process.argv[3];

fs.readFile(exist_file, function(err, data) {
  if (err) {
    console.log("oh no!");
    console.log(err);
  } 

  else {
    var text = data.toString();    
    fs.writeFile(new_file, text, function (err) {
      if (err){
       console.log(err);
      } 
      else {
        console.log("it worked!");
      }
    });
  }
})

// this takes two arguments in node, it reads a file as the first
// param and within the readFile  else statement it will create a new
// file named the second param



//THIS IS THE TEACHERS VERY BASIC EXAMPLE
// var fs = require('fs');


// fs.readFile(f.txt, function(err, data) {

//     fs.writeFile(s.txt, data, function (err) {
//       console.log("done");
//     });
//   });


////PART 2 ANOTHER SAY
// // #2
// var doneReading = function(err, data){
//   fs.writeFile("f.txt", data, doneWriting);
// }

// // #3
// var doneWriting = function(err){
//   console.log("done");
// }

// //#1
// fs.readFile("f.txt", doneReading); 

// //this is a more streamlined way to write it so its declared
// //functions



