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

console.log(max(65, 3, 53))
console.log(max(23, 74, 53))
console.log(max(46, 3, 78))
console.log(max(5, 5, 5))

//this function chooses the largest of three
