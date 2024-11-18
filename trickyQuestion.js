// let randomvalue = {name: "ram"};
// randomvalue = 1;
// console.log(!typeof randomvalue);

// if(!typeof randomvalue === 'string'){
//     console.log("randomvalue is not a string");
// } else {
//     console.log("randomvalue is a string");
// }

// // 


const animals = {};
let dog = {emoji: '🐶'};
let cat = {emoji: '🐱'};

animals[dog] = {...dog, name: 'jony'};

console.log(animals[dog]);

animals[cat] = {...cat, name: 'tom'};

console.log(animals[dog]);
 