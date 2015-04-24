var word = process.argv[2]
counter = 0


while(counter < word.length ){
  if(counter === 0){
  console.log(word[counter]);
  counter++;
  }
  else if(counter % 2 === 0){
  console.log(word[counter]);
  counter++;
}
  else {
  counter++;
  }

}
