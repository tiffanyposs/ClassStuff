var counter = 0;
var sayHi = function() {
  console.log("Say hello to my little friend");
  counter++;
  if(counter===5){
    clearInterval(refreshIntervalId);
  };
};

var refreshIntervalId = setInterval(sayHi, 2000)

/*
Set counter to 0
Define function sayHi
it will console.log "Say hello to.."
adds 1 to the counter
if the counter is = 5 it will stop it

create variable refreshIntervalId it will trigger the sayHi function
to print every 5 seconds
*/
