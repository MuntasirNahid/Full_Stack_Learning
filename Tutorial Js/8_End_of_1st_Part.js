//Modules
//CommonJs ,every file is module(by default)
//Modules - Encapsulated code(only share minimum )

//To use exported object from 4_First_Module we have to use require
const names = require('./4_First_Module');
console.log(names);

const data = require('./6_Alterntive_Syntax')
console.log(data);

require('./7_Mind_Grenade')


const sayHii = require('./5_Utills')
sayHii('Tosar')
sayHii(names.nahid)
sayHii(names.dihan)

// const sayHello = (name) => {
//     console.log(`say hello ${name}`);
// }
// sayHello(`nayem`);
// sayHello('nahid');
// sayHello(dihan);