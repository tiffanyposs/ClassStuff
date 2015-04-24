var player = function(g, a, p, s){
  var person = {
    goals: g,
    assists: a,
    points: p,
    shots: s
  }
  return person
}

var rick_nash = player(14, 7, 21, 72)

console.log(rick_nash)

/*
// below is the answer the teacher gave

var player = function(goals, assists, points, shots){
  this.goals= goals;
  this.assists = assists;
  this.points = points;
  this.shots = shots;
};

var RickNash = new player(14, 7, 21, 73);

console.log(RickNash);

*/
