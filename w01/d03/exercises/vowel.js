var string = process.argv[2];
var counter = 0;

while(counter < string.length){
  if((string.charAt(counter) === "a") ||
    (string.charAt(counter) === "e") ||
    (string.charAt(counter) === "i") ||
    (string.charAt(counter) === "o") ||
    (string.charAt(counter) === "u")){
    console.log(string.charAt(counter))}
    counter ++;
}

/*
This takes an argument from the user (string)
The counter starts at 0 so it starts at the beginning of the string
The while statement makes sure that each character is checked during the whole length
The if statements checks each spot in the string argument
and checks weather it has a vowel
console.log prints the string each letter on the separate line only if its a vowel from before
counter ++ counts through each spot
*/
