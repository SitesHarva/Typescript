"use strict";
// interface Driver {
//     name?: string;
//     age?: number;
// }
// class Builder {
//     driver?: Driver;
//     constructor(
//         public model: string,
//         public creator: string,
//         public year: number,
//         public maxSpeed: number,
//         public hp: number
//     ) {}
//     drive(): void {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info(): void {
//         for (let key of Object.keys(this) as (keyof this)[]) {
//             const value = this[key];
//             if (typeof value !== 'function') {
//                 console.log(key, value);
//             }
//         }
//     };
//     increaseMaxSpeed (newSpeed: number): void {
//         if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     changeYear(newYear: number): void {
//         if (newYear > 1815) this.year = newYear;
//     }
//     addDriver(driverObj: Driver): void {
//         this.driver = driverObj;
//     }
// }
// let car = new Builder('tesla', 'Musk', 2025, 300, 1000);
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(1991);
// car.addDriver({name: 'Vasya', age: 25});
// console.log(car);
