class Card {
  constructor(args = {}) {
    this.suit = args.suit || "";
    this.face = args.face || "joker";
    this.value = args.value || 0;
    this.joker = args.joker || false;
  }

  toString() {
    if(this.joker){
      return this.face;
    }
    else{
      return `${this.face} of ${this.suit}s with value of ${this.value}`;
    }
  }
}

module.exports = Card;