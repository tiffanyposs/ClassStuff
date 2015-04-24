/*
var a = [1, 2, 3];

var cb = function(num){
  console.log(num);
};

a.forEach(cb);

// cb(1)
// cb(2)
// cb(3)

object.addEventListener(evenname, function(){
  //do something
  //don't return
})

button.addEventListener("click", function(){
  //do something
})

//

process.argv
//(object.propertiesarray)

process.stdin
//input coming in from the user
*/

/*
process.stdin.on("data", function(data){
  console.log(data);
});
*/

process.stdin.on("data", function(data){
  var new_data = data.toString();
  new_data = new_data.trim();
  console.log(new_data);
});
