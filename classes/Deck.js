const Card = require('./Card')

class Deck {  
  constructor (args = {}) {
    this.jokers = args.jokers || false;

    this.cards = [];

    this.suits  = ["club", "diamond", "heart", "spade"];
    this.faces  = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.create();
  }

  create () {
    for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 13; j++) {
        const card = new Card({
          suit: this.suits[i],
          face: this.faces[j],
          value: this.values[j]
        });

        this.cards.push(card);
      }
    }

    if(this.jokers){
      this.cards.push(new Card({joker: true}));
      this.cards.push(new Card({joker: true}));
    }
  }
  
  /*
  * Pick card(s) from the deck
  * takes one json object with following optional parameters
  * @param position: 'top', 'bottom' or by default 'random'. Determines where the cards will be taken.
  * @param count: number of cards to pick from the deck, 1 by default.
  */
  pick (args = {}) {
    const position = args.position || 'random';  //top, bottom, random
    const count = args.count || 1;
    
    switch(position){
      case 'top':
        return this.cards.splice(0, count);
        break;
      case 'bottom':
        return this.cards.splice(-count, count);
        break
      default:
        let picks = [];
        for (let i = 0; i < count; i++) {
          let index = this.random();
          picks.push(...this.cards.splice(index, 1));
        }
        return picks;
    }
  }
  
  /*
  * Checks (reveals) card(s) from the deck
  * takes one json object with following optional parameters
  * @param position: 'top', 'bottom' or by default 'random'. Determines where the cards will be revealed from.
  * @param count: number of cards to check from the deck, 1 by default.
  */
  check (args = {}) {
    const position = args.position || 'random';
    const count = args.count || 1;

    switch(position){
      case 'top':
        return this.cards.slice(0, count);
        break;
      case 'bottom':
        return this.cards.slice(-count);
        break
      default:
        let picks = [];
        for (let i = 0; i < count; i++) {
          let index = this.random();
          picks.push(...this.cards.slice(index, index + 1));
        }
        return picks;
    }
  }

  shuffle () {
    let cards = [];
    const len = this.cards.length;

    for(let i = 0; i < len; i++){
      cards.push(this.pick())
    }

    this.cards = cards;
  }

  random(args = {}){
    const min = args.min || 0;
    const max = args.max || this.cards.length;
    const ran = Math.random();

    return Math.floor((max - min) * ran + min);
  }
}

module.exports = Deck;
