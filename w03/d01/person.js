var Person = function(name, age){
  this.name= name;
  this.age= age;
  this.birthday = function(){
    this.age++
  }
}

var tiffany = new Person("Tiffany", 26)
var karl = new Person("Karl", 22)

tiffany.birthday();
karl.birthday()

console.log(tiffany.age)
console.log(karl.age)


/*
var Person = function(name, age){
  this.name= name;
  this.age= age;
  this.birthday = function(){
    new_age = this.age +=1;
    return new_age;
  }
}
var tiffany = new Person("Tiffany", 26)
var karl = new Person("Karl", 22)

console.log(tiffany.birthday())
console.log(karl.birthday())
*/

/*
var Person = function(name, age){
this.name= name;
this.age= age;
}

}
var tiffany = new Person("Tiffany", 26)
var karl = new Person("Karl", 22)

//this adds a birthday function to tiffany

tiffany.birthday = function(){
  this.age++;
}

*/


/*
var Person = function(name, age){
  this.name = name;
  this.age = age;
  this.bithday = function(){
  this.age++;
}
}

var sean = new Person("sean", 30);
sean.birthday();
console.log(sean.age) // sean is now 31
*/
