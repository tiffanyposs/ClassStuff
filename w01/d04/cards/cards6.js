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



  for(var down = 52; down > 0; new_deck.length > 1){
    var new_deck = deck;
    var three = [(new_deck[Math.floor(down*Math.random())]),
    (new_deck[Math.floor(down*Math.random())]),
    (new_deck[Math.floor(down*Math.random())])];

    var x = 0;

    while(x <= 50){
      if(three[0] === new_deck[0] || three[1] || three[2] === new_deck[x]){
        new_deck.splice(x, 1);
        x++;
        down--;
        down--;
        down--;
      }
      else{
        x++;
        down--;
        down--;
        down--;
      }
      console.log(new_deck)
    }

  }




/*
var remove = function(){
  var new_deck = deck;
  var x = 0;
  for(var down = 52; down > 0, new_deck.length > 1; down-3){
      var three = [(new_deck[Math.floor(down*Math.random())]),
      (new_deck[Math.floor(down*Math.random())]),
      (new_deck[Math.floor(down*Math.random())])];
      while(x <=52){
      if(three[0] || three[1] || three[2] === new_deck[x]){
      new_deck.splice(x, 1);
      x++;
    }
      else{
        x++;
      }
    }
  }
  return new_deck

}

console.log(remove())
*/
