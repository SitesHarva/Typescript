"use strict";
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
// console.log(deck);
// let spaceAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
// console.log(spaceAce);
// let six = deck.filter(card => card.value === 6);
// console.log(six);
// let redCards = deck.filter(card => card.color === 'red');
// console.log(redCards);
// let diamonds = deck.filter(card => card.cardSuit === 'diamond');
// console.log(diamonds);
// let tref = deck.filter(card => card.cardSuit === 'clubs' && [9, 10, 'jack', 'queen', 'king', 'ace'].includes(card.value));
// console.log(tref);
