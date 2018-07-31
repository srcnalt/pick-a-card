const Deck = require('./Deck')
const deck = new Deck()

let card;
console.log(deck.cards);
card = deck.pickOne();
console.log(card.toString());

card = deck.cards[0];
console.log(card.toString());

deck.shuffle();

card = deck.cards[0];
console.log(card.toString());


