// const suits: Suit[] = ['spade', 'diamond', 'heart', 'clubs'];
// const values: Value[] = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
// const colors: { spade: Color; clubs: Color; diamond: Color; heart: Color } = {
//     spade: 'black',
//     clubs: 'black',
//     diamond: 'red',
//     heart: 'red'
// };

// type Suit = 'spade' | 'diamond' | 'heart' | 'clubs';
// type Value = 6 | 7 | 8 | 9 | 10 | 'jack' | 'queen' | 'king' | 'ace';
// type Color = 'red' | 'black';

// interface DeckPacked {
//     spade: Card[];
//     clubs: Card[];
//     diamond: Card[];
//     heart: Card[];
// }

// type Card = {
//     cardSuit: Suit;
//     value: Value;
//     color: Color;
// };

// let deck: Card[] = [];

// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({
//             cardSuit: suit,
//             value: value,
//             color: colors[suit]
//         });
//     }
// }

// let deckPacked = deck.reduce((suit, card) => {
//     suit[card.cardSuit].push(card);
//     return suit;
// }, {

//     spade: [],
//     clubs: [],
//     diamond: [],
//     heart: []
// } as DeckPacked);

// console.log(deckPacked);