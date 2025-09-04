// interface Array<T> {
//     forEach(callback: (value: any, index: number,array: any[]) => void): void;
// } 

// Array.prototype.forEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this)
//     }
// };

// [100, 500, 1000, 5000, 10000].forEach(i => console.log(i));


// Array.prototype.filter = function(this: any[], callback: (value: any, index: number, array: any[]) => boolean): any[] {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)){
//             result.push(this[i])
//         }
//     }
//     return result;
// };

// let filteredNumbers = [100, 500, 1000, 5000, 10000].filter(i => i > 2000);
// console.log(filteredNumbers);