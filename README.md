## Pick a Card [![Build Status](https://travis-ci.org/srcnalt/pick-a-card.svg?branch=master)](https://travis-ci.org/srcnalt/pick-a-card)
A node package for playing cards.

### Usage

#### Initializing
To install the package run `npm i pick-a-card`

Requiring the package brings two classes which are `Deck` and `Card`.
```js
const {Deck, Card} = require('pick-a-card');
```

#### Creating a Deck
`Deck` class creates a classic playing cards deck. Optionally 2 jokers can be added to the deck using `jokers` parameter. Created deck will have 4 suits with 13 cards each. Every card will have their value where Ace is 1 and King is 13.
```js
const deckWithoutJockers = new Deck();

const deckWithJockers = new Deck({jokers: true});
```

#### Picking and Checking Cards from the Deck
Use `pick` and `check` methods of `Deck` instance to extract or reveal a card from the deck. Both methods can have parameters of `position` which are `'random', 'top' and 'bottom'` and `count` which is an integer between 0 and the length of the cards in the deck. After using pick returned Card array is removed from the deck, and after using check the deck does not change.

```js
deck.pick(); //extracts 1 card from a random position.
deck.pick({position: 'top', count: 3}); //extracts 3 cards from the top of the deck.

deck.check(); //reveal 1 card from a random position.
deck.check({position: 'bottom', count: 2}); //reveals 2 cards from the bottom of the deck.
```

#### Shuffle the Deck
Calling the shuffle method of the deck randomly repositions all the cards in the deck. Mutates the main deck, does not return a shuffled copy.
