const Deck = require('../Deck');

describe('Deck', () => {
  test('with parameter creates a deck with jokers', () => {
    const deck = new Deck({jokers: true});
    expect(deck.cards.length).toBe(54);
    expect(deck.jokers).toBe(true);
  });

  test('with parameter creates a deck without jokers', () => {
    const deck = new Deck({jokers: false});
    expect(deck.cards.length).toBe(52);
    expect(deck.jokers).toBe(false);
  });

  test('without parameter creates a deck without jokers', () => {
    const deck = new Deck();
    expect(deck.cards.length).toBe(52);
    expect(deck.jokers).toBe(false);
  });
});
