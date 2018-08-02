const Card = require('./Card')

class Deck {  
  constructor (args = {}) {

    this.jokers = args.jokers || true;

    this.cards = [];

    this.suits = ["club", "diamond", "heart", "spade"];
    this.faces = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

    this.create();
  }

  create () {
    for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 13; j++) {
        const card = new Card({
          suit: this.suits[i],
          face: this.faces[j]
        });

        this.cards.push(card);
      }
    }

    if(this.jokers){
      this.cards.push(new Card({joker: true}));
      this.cards.push(new Card({joker: true}));
    }
  }

  pickOne () {
    const index = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(index, 1); 
  }

  //pick n number of cards randomly or from top 
  pickSome (args = {}) {
    top = args.top || false;
    count = args.count || 1;
  }

  //check n number of cards randomly or from top
  checkSome (count = 1) {
    top = args.top || false;
    count = args.count || 1;
  }

  shuffle () {
    let cards = [];
    const len = this.cards.length;

    for(let i = 0; i < len; i++){
      cards.push(this.pickOne())
    }

    this.cards = cards;
  }

  random(args = {}){
    const min = args.min || 0;
    const max = args.max || 0;
    const ran = Math.random();

    if(min == 0 && max == 0)
      return Math.floor(ran * this.cards.length);
    else
      return Math.floor((max - min + 1)*ran + min);
  }
}

module.exports = Deck;
