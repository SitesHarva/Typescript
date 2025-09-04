// let coursesAndDurationArray: Course[] = [

//     {title: 'JavaScript Complex', monthDuration: 5},

//     {title: 'Java Complex', monthDuration: 6},

//     {title: 'Python Complex', monthDuration: 6},

//     {title: 'QA Complex', monthDuration: 4},

//     {title: 'FullStack', monthDuration: 7},

//     {title: 'Frontend', monthDuration: 4}

// ];

// type Course = {
//     title: string,
//     monthDuration: number,
//     id?: number
// };

// function sortMonths(arr: Course[]): Course[] {
//         let sortedId = arr.map((value: Course, index: number) => ({...value, id: index + 1}));
//         console.log(sortedId);

//         let sort: Course[] = arr.filter((value: Course) => value.monthDuration > 5);
//         sort.map((value: Course, index: number) => {
//             value.id = index;
//             return value;
//         })
//         console.log(sort);
        
//         return arr.sort((a: Course, b: Course) => b.monthDuration - a.monthDuration);
// }
// console.log(sortMonths(coursesAndDurationArray));