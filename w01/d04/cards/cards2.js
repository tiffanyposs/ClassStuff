var cards = ["Ace", "King", "Queen", "Jack"]

for(new_card = 10; new_card>=2; new_card--) {
  cards.push(new_card);
}

var deck = []

while(deck.length <= 52) {
  for(i=0; i<=12; i++) {
  deck.push(cards[i] + " of Hearts");
  deck.push(cards[i] + " of Diamonds");
  deck.push(cards[i] + " of Spades");
  deck.push(cards[i] + " of Clubs");
}
}

console.log(deck)

// This will make the cards array Ace through 2
// then it will create a new array deck
//that will push each card from the cards array
// into the deck array while adding the suit to each
// will print out each all 52 cards

/*
VARIABLES:

cards = array containing all card values
new_card = counter for card values
deck = array of all the cards
i = counter for suits

*/
