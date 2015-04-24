//below makes the values
var cards = ["Ace", "King", "Queen", "Jack"]

for(new_card = 10; new_card>=2; new_card--) {
  cards.push(new_card);
}

//below makes the whole deck, deck

var deck = []

while(deck.length <= 52) {
  for(i=0; i<=12; i++) {
    deck.push(cards[i] + " of Hearts");
    deck.push(cards[i] + " of Diamonds");
    deck.push(cards[i] + " of Spades");
    deck.push(cards[i] + " of Clubs");
  }
}

//below select chooses two random cards in an array
//then their values are pushed to number array

var select = [(deck[Math.floor(52*Math.random())]),
(deck[Math.floor(52*Math.random())]),
(deck[Math.floor(52*Math.random())])]

var number = []
var counter = 0

while(counter < select.length){
  if(select[counter].charAt() === "2"){
    number.push(2)
  }
  else if(select[counter].charAt() === "3"){
    number.push(3)
  }
  else if(select[counter].charAt() === "4"){
    number.push(4)
  }
  else if(select[counter].charAt() === "5"){
    number.push(5)
  }
  else if(select[counter].charAt() === "6"){
    number.push(6)
  }
  else if(select[counter].charAt() === "7"){
    number.push(7)
  }
  else if(select[counter].charAt() === "8"){
    number.push(8)
  }
  else if(select[counter].charAt() === "9"){
    number.push(9)
  }
  else if(select[counter].charAt() === "A"){
    number.push(1)
  }
  else {
    number.push(10)
  }
  counter++
}


// below logs the three selections (select)
//logs their values
//logs their sum

var total = number[0] + number[1] + number[2]

console.log(select)
console.log(number)
console.log(total)

//loops the sum of the three random cards to see if your
//hand is valid, Blackjack or Bust

if(total <= 20){
  console.log("Valid Hand.");
}
else if(total === 21){
  console.log("BlackJack!");
}
else {
  console.log('Bust!');
}



// This will make the cards array Ace through 2
// then it will create a new array deck
//that will push each card from the cards array
// into the deck array while adding the suit to each
// will print out each all 52 cards

//select randomly selects two cards from the previous deck
// the while statement checks to make sure only the two spots are checked
// the if statments check what card it is then pushes its value into
//the numbers variable. uses charAt to check each character
//counter counts up the length of the orginal array

// console.log logs the cards slected, their values, and total

// var total adds all three values, then loops that value
//to see if it is Blackjack, Bust, or a Valid Hand

/*
VARIABLES:

cards = array containing all card values
new_card = counter for card values
deck = array of all the cards
i = counter for suits

select = randomly selects three cards
number = converts the randomly selected into
counter = counter for two spots in the array

total = the sum of the three random cards

*/
