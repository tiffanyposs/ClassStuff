var sayHello = function() {
  console.log("Say hello to my little friend");
}

console.log("Hello!");
setTimeout(sayHello, 2000);
console.log("Goodbye")


/*
creates a function that will print "Say hello to my..." when it is called

Then it console.log "Hello"

setTimeout is triggered, calls the function, (function name, miliseconds )
1000 miliseconds = 1 second;
then Goodbye is printed

javascript will do the other things before the timer actually is done

*/
