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

describe('Pick', () => {
  test('without parameters should extract a random card from the deck', () => {
    const deck = new Deck();
    const card = deck.pick()[0];
    expect(card.constructor.name).toBe('Card');
    expect(deck.cards.length).toBe(51);
  });

  test('with parameter count:3 extracts 3 random cards from the deck', () => {
    const deck = new Deck();
    const cards = deck.pick({count: 3});
    expect(cards.length).toBe(3);
    expect(deck.cards.length).toBe(49);
  });

  test('with parameter position:top extracts 1 cards from the top of the deck', () => {
    const deck = new Deck();
    const cards = deck.pick({position: 'top'});
    expect(cards.length).toBe(1);
    expect(deck.cards.length).toBe(51);
    expect(cards[0].face).toBe("ace");
  });

  test('with parameter position:bottom extracts 1 card from the bottom of the deck', () => {
    const deck = new Deck();
    const cards = deck.pick({position: 'bottom'});
    expect(cards.length).toBe(1);
    expect(deck.cards.length).toBe(51);
    expect(cards[0].face).toBe("king");
  });
  
  test('with parameter position:random extracts 1 random card from the deck', () => {
    const deck = new Deck();
    const cards = deck.pick({position: 'random'});
    expect(cards.length).toBe(1);
    expect(deck.cards.length).toBe(51);
  });

  test('with parameter position:top, count:3 extracts 3 cards from the top of the deck', () => {
    const deck = new Deck();
    const cards = deck.pick({position: 'top', count: 3});
    expect(cards.length).toBe(3);
    expect(deck.cards.length).toBe(49);
    expect(cards[0].face).toBe("ace");
    expect(cards[1].face).toBe("2");
    expect(cards[2].face).toBe("3");
  });
  
  test('with parameter position:bottom, count:2 extracts 2 cards from the top of the deck', () => {
    const deck = new Deck();
    const cards = deck.pick({position: 'bottom', count: 2});
    expect(cards.length).toBe(2);
    expect(deck.cards.length).toBe(50);
    expect(cards[0].face).toBe("queen");
    expect(cards[1].face).toBe("king");
  });
});

describe('Check', () => {
  test('without parameters should reveal a random card from the deck', () => {
    const deck = new Deck();
    const card = deck.check()[0];
    expect(card.constructor.name).toBe('Card');
    expect(deck.cards.length).toBe(52);
  });

  test('with parameter count:3 reveals 3 random cards from the deck', () => {
    const deck = new Deck();
    const cards = deck.check({count: 3});
    expect(cards.length).toBe(3);
    expect(deck.cards.length).toBe(52);
  });

  test('with parameter position:top reveals 1 cards from the top of the deck', () => {
    const deck = new Deck();
    const cards = deck.check({position: 'top'});
    expect(cards.length).toBe(1);
    expect(deck.cards.length).toBe(52);
    expect(cards[0].face).toBe("ace");
  });

  test('with parameter position:bottom reveals 1 card from the bottom of the deck', () => {
    const deck = new Deck();
    const cards = deck.check({position: 'bottom'});
    expect(cards.length).toBe(1);
    expect(deck.cards.length).toBe(52);
    expect(cards[0].face).toBe("king");
  });

  test('with parameter position:random extracts 1 random card from the deck', () => {
    const deck = new Deck();
    const cards = deck.check({position: 'random'});
    expect(cards.length).toBe(1);
    expect(deck.cards.length).toBe(52);
  });

  test('with parameter position:top, count:3 extracts 3 cards from the top of the deck', () => {
    const deck = new Deck();
    const cards = deck.check({position: 'top', count: 3});
    expect(cards.length).toBe(3);
    expect(deck.cards.length).toBe(52);
    expect(cards[0].face).toBe("ace");
    expect(cards[1].face).toBe("2");
    expect(cards[2].face).toBe("3");
  });

  test('with parameter position:bottom, count:2 extracts 2 cards from the top of the deck', () => {
    const deck = new Deck();
    const cards = deck.check({position: 'bottom', count: 2});
    expect(cards.length).toBe(2);
    expect(deck.cards.length).toBe(52);
    expect(cards[0].face).toBe("queen");
    expect(cards[1].face).toBe("king");
  });
});
