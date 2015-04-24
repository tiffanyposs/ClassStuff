var word = process.argv[2]      // this takes the first argument
var ohenry = 0                  // counts the o's counter
var counter = 0                 // counter of letters

while(counter < word.length) {   //this checks if counter
  if(word[counter] === "o") {   // if the letter is equal to the [] after a variable counts the letter spot
    ohenry++                    // ohenry will go up
    counter++
  }
  else {
    counter++                   // this will make counter go up regardless
  };                             // if theres is an o
}
  if(ohenry === 2) {
    console.log("true")
  }
  else {
    console.log("false")
  }

// this program takes and argument and checks to see
// if there is at least 2 "o"s in the input

/*

below is my wrong answer

var letter = process.argv[2];
var counter = 0;

while(counter <= letter.length){
  if(letter.charAt(counter) === "o"){
  console.log("true")
  }

  else {
  console.log("false")
  }
  counter ++;
}
*/
