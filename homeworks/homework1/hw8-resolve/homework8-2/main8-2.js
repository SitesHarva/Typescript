"use strict";
function copyObj(obj) {
    for (let e in obj) {
        const value = obj[e];
        if (value === undefined) {
            console.log('в обєкті є поле undefined');
            return;
        }
        else if (value === null) {
            console.log('в обєкті є поле null');
            return;
        }
        else if (typeof value === 'number' && Number.isNaN(value)) {
            console.log('в обєкті є поле NaN');
            return;
        }
    }
    const functions = [];
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            const functionClone = obj[key].bind({});
            functions.push({ functionClone, key });
        }
    }
    const copy = JSON.parse(JSON.stringify(obj));
    for (const func of functions) {
        copy[func.key] = func.functionClone;
    }
    console.log(copy);
    return copy;
}
copyObj({ name: 'vasya', age: '31', greetings() { return 'hello'; } });
copyObj({ name: 'vasya', age: undefined });
copyObj({ name: 'vasya', age: null });
copyObj({ name: 'vasya', age: NaN });
