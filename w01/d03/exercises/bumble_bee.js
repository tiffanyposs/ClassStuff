var bug = 1;

while (bug <= 100) {

  if ((bug % 3 === 0) && (bug % 5 === 0)) {
    console.log("BumbleBee")
  }
  else if (bug % 3 === 0) {
    console.log("Bumble")
  }
  else if (bug % 5 === 0) {
    console.log("Bee")
  }
  else {
    console.log(bug);
  }

  bug ++;
}


//the if statements must be inside of the while statement
