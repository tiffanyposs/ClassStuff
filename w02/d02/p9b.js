var Square = function(width, height, color){
  this.width = width;
  this.height = height;
  this.color = color;
  this.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(400*Math.random(), 400*Math.random(), this.width, this.height);
    return ctx.fillStyle
  }
};

var pinkSquare = new Square(50, 50, "pink");

var createxSquares = function(){
  square =  pinkSquare //new Square;
  array = [];
  for(var counter = 0; counter <= 10; counter++){
    square.push(array);
  }
  return array;
}

var drawSquares = function(){
  createxSquares;
  setInterval
}
