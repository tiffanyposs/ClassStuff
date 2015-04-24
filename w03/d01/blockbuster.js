var MovieObject = function(movie, director, rating){
  this.movie = movie,
  this.director = director,
  this.rating = rating,
  this.critic = function(){
    if(rating === 0){
      return "Unfortunately, it gets two thumbs down."
    }
    else if(rating === 1){
      return "One thumb up, one thumb down."
    }
    else{
      return "TWO THUMBS UP!"
    }
  }
  this.about = function(){
    return this.movie + " came out this past weekend, it was directed by " + this.director
  }

}

var pulp_fiction = new MovieObject("Pulp Fiction", "Quintin Tarentino", 2)

console.log(pulp_fiction.about())
console.log(pulp_fiction.critic())
