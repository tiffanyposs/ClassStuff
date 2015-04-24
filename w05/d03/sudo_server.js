var fs = require('fs');

fs.readFile("hello.txt", function(err, data) {
  if (err) {
    console.log("oh no!");
    console.log(err);
  } else {
    var text = data.toString();
    console.log(text);
  }
})

// this is a sudo file you create in node by sudo touch ____filename;
// then you can put in your computers passwords and you are the only
// one that can edit it. Then you can node it and it will run an error