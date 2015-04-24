var Car = function(brand, model, color){
  this.brand= brand;
  this.model= model;
  this.color= color;
  this.gear = "parked";
  this.stopped = true;
  this.drive= function(){
    this.gear = "drive";
    return this.brand + " " + this.model + " is in drive."
  };
  this.stop = function(){
    this.stopped = true;
    return this.brand + " " + this.model + " has stopped.";
  };
  this.accelerate = function(){
    if(this.gear === "parked"){
      return "Switch to Drive First!";
    }
    else {
      return this.brand + " " + this.model + " is accelerating.";
    }
  };
  this.park = function(){
    if(this.stopped === false){
      return "Stop the car first!";
    }
    else{
      this.gear = "park";
      return this.brand + " " + this.model + " is parked.";
    }
  }
}

audi = new Car("Audi", "A6", "Black")
tesla = new Car("Tesla", "Model S", "Red")

console.log(audi)
console.log(tesla)
console.log(tesla.stop())
console.log(audi.stop())
console.log(tesla.park())
console.log(audi.accelerate())
