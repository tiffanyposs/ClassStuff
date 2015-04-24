var Circle = function(){
  this.x = math.random()*200;
  this.y = 0;
  this.draw = function(){
    ctx.fillArc(....)
  }
  }
var Square = function(){
  this.x = 0;
  this.y = 0;
  this.draw = function() {
    ctx.fillRect(....)
  }
}


var shapes = [];
  shapes.push(new Square());
  shapes.push(new Squares());

  .
  .
  .
  .


  for(var i = 0; i < shapes.length; i++){
    shapes[i].x++;
    shapes[i].draw();
  }
