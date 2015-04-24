var max = function(x, y) {
  if(x > y){
    return x;
  }
  else if (x < y){
    return y;
  }
  else {
    return "They're Equal"
  }
}

console.log(max(8,7))
console.log(max(100,100))
console.log(max(10, 60))
