const Deck = require('../classes/Deck');

describe('Card', () => {
  test('should have a string definition', () => {
    const deck = new Deck();
    const card = deck.cards[0];
    const def = card.toString();

    expect(def).toBe("ace of clubs with value of 1");
  });
});
