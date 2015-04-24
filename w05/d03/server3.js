var fs = require('fs');

var file = process.argv[2];
var string = process.argv[3];

fs.writeFile(file, string, function (err) {
  if (err){
    console.log(err);
  } 
  else {
    console.log("it worked!");
  }
});




// this takes three paramenters, 

//first is the filename (can be one that
	//doesth exist yet, is basically the file path)

//the send is the contents, it must be a string

//then the function call back with a error param,
//if its a error it will consolelog error
//if it works it will say it worked!