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

  //pick n number of cards randomly or from top 
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

  //check n number of cards randomly or from top
  check (args = {}) {
    const position = args.position || 'random';
    const count = args.count || 1;

    switch(position){
      case 'top':
        return this.cards.slice(0, count);
        break;
      case 'bottom':
        return this.cards.slice(-count, count);
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
      return Math.floor((max - min + 1) * ran + min);
  }
}

module.exports = Deck;
