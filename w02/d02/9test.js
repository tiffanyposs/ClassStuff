var canvas = document.getElementById('the_canvas');
var ctx = canvas.getContext('2d');

var Square = function(width, height, color){
  this.x = Math.random()*canvas.width;
  this.y = Math.random()*canvas.height;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


var createxSquares = function(){
  var allSquares = []; //new Square;
  var numSquares = 10;
  for(var i = 0; i <numSquares; i++){
    var square = new Square(50, 50, "magenta");
    allSquares.push(square)
  }
  return allSquare;
}


var drawSquares = function() {
  var tenSquares = createXSquares();

  for(var i= 0; i<tenSquares.length; i++){
    var square = tenSquares[i];
    square.draw();
  }
}

var intervalID = setInterval(drawSquares, 100)

console.log(intervalID
