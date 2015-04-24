var x = parseInt(process.argv[2])
var y = parseInt(process.argv[3])
var z = parseInt(process.argv[4])

var max = function(x, y, z) {
  if(x > y && x > z){
    return x;
  }
  else if(y > x && y > z){
    return y;
  }
  else if(z > x && z > y){
    return z;
  }
  else{
    return "They're Equal";
  }
}

console.log(max(x, y, z))


//this function chooses the largest of three
