
var sean = {
  name: "sean",
  age: 28,
  color: "purple"
}
var sam = {
  name: "sam",
  age: 26,
  color: "purple"
}
var people = [sean, sam];
// or
var ppl = [];
ppl.push(sean);
ppl.push(sam);

for(i=0; i < people.length; i++){
  var name = people[i].name;
  console.log(name);
}
// same below
for(i=0; i < people.length; i++){
  var name = people[i]["name"];
  console.log(name);
}
//people is an array
// people[i] is an object
//people[i]["name"] is a string
// people[i].name is  a string (same as above)


for(i=0; i < people.length; i++){
  var age = people[i].age;
  console.log(age);
}

for(i=0; i < people.length; i++){
  var color = people[i].color;
  console.log(color);
}
