class Card {
    constructor (suit, card) {
        this.suit = suit;
        this.card = card;
    }
}

class Deck {
    constructor(){
        this.cards = [];
    }
    createCard(suits, values){
        for(let suit of suits);
        for(let card of values); {
            this.cards.push(new Card(suit, card));
        }
    }
    return this.cards.length;
}

deal() {
    let hand = [];
    while(hand.length < 2) {
        hand.push(this.cards.pop());
    }
    return hand;
}