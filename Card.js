class Card {
  constructor(args = {}) {
    this.suit = args.suit || "";
    this.face = args.face || "joker";
    this.joker = args.joker || false;
  }

  toString() {
    if(this.joker){
      return this.face;
    }
    else{
      return `${this.face} of ${this.suit}s`;
    }
  }
}

module.exports = Card;