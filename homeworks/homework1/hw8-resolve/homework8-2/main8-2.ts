// type ClonerObject = {functionClone: Function, key: string};

// function copyObj<T>(obj: T): T | void {
//     for (let e in obj) {
//         const value = obj[e];
//         if (value === undefined) {
//             console.log('в обєкті є поле undefined');
//             return;
//         } else if (value === null) {
//             console.log('в обєкті є поле null');
//             return;
//         } else if (typeof value === 'number' && Number.isNaN(value)) {
//             console.log('в обєкті є поле NaN');
//             return;
//         } 
//     }

//     const functions: ClonerObject[] = [];
//     for (let key in obj) {
//         if (typeof obj[key] === 'function') {
//             const functionClone = (obj[key] as (...args: any[]) => any).bind({});
//             functions.push({functionClone, key});
//         }
//     }
//     const copy: T = JSON.parse(JSON.stringify(obj));

//     for (const func of functions) {
//         (copy as any)[func.key] = func.functionClone;
//     }
//     console.log(copy)
//     return copy;
    
// }
// copyObj({name: 'vasya', age: '31', greetings() {return 'hello'}});
// copyObj({name: 'vasya', age: undefined});
// copyObj({name: 'vasya', age: null});
// copyObj({name: 'vasya', age: NaN});
