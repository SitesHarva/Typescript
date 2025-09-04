"use strict";
// interface Driver{
//     name?: string,
//     age?: number,
// };
// interface Car{
//     [key: string]: any;
//     model: string,
//     creator: string,
//     year: number;
//     maxSpeed: number,
//     hp: number,
//     driver?: Driver;
//     drive: () => void;
//     info: () => void;
//     increaseMaxSpeed: (newsSpeed: number) => void;
//     changeYear: (newYear: number) => void;
//     addDriver: (driverObj: Driver) => void;
// };
// function Builder(this: Car, model: string, creator: string, year: number, maxSpeed: number, hp: number) {
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.hp = hp;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (let key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(key, this[key]);
//             } 
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newYear) {
//         if (newYear > 1815) this.year = newYear;
//     };
//     this.addDriver = function (driverObj) {
//         if (driverObj) this.driver = driverObj;
//     };
// }
// let car = new (Builder as any)('tesla', 'Musk', 2025, 300, 1000);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(1991);
// car.addDriver({});
// console.log(car);
