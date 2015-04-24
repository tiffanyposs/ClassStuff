var counter = 10;
var count_down = function(){

  if(counter>= 1){
    console.log(counter);
    counter-= 1;
  }
  else{
    console.log("Happy New Year!!!");
    clearInterval(refreshID);
  }
}

var refreshID = setInterval(count_down, 1000)

/*
counter is set to 10 outside of the  function
created function count_down
if the counter is greater than or equal to 1 it will console.log that number
then it will subtract 1 from counter and equal counter to that.
It will repeat counting down all the way until the if statement counter>=1 is invalid

Else it will console.log(Happy New Year)
Then it clears the Interval

Outside of the function a new variable is declared refreshID = to setting the interval
to count_down function. refreshID is the perameter for the clearInterval inside
of the function so it will cancel the countdown within that if statement
*/
