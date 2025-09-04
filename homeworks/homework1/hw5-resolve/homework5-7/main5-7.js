"use strict";
// let pusher = (elements: (string | number | boolean)[]): void => {
//     let strings: string[] = [];
//     let booleans: boolean[] = [];
//     let numbers: number[] = [];
//     for (let element of elements) {
//         if (typeof element === 'string') {
//             strings.push(element);
//         } else if (typeof element === 'boolean') {
//             booleans.push(element);
//         } else if (!isNaN(element)){
//             numbers.push(element);
//         } else if (isNaN(element)){
//             console.log('nan');
//         }
//     }
//     let builder = (type: string, items: (string | number | boolean)[]): void => {
//         if (items.length > 0) {
//             document.write(`<ul><h3>${type}</h3>`);
//                 for (let i = 0; i < items.length; i++) {
//                     document.write(`<li>${items[i]}</li>`);
//                 }
//             document.write(`</ul>`);
//         }
//     }
//     builder('strings', strings);
//     builder('booleans', booleans);
//     builder('numbers', numbers);
// }
// pusher([111, 'abcd', true, NaN, 333, true, 555, false, 'qwertyui', NaN, 666, 777, NaN, 'fff', 'eee', 100500]);
