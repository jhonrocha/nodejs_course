console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');


/* LESSON 1 */
// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\n`, (err)=>{
//   if(err){
//     console.log(err);
//   }
// });
    
/* LESSON 2 */
// let res = notes.addNote();
// console.log(res);
// console.log('Result: ', notes.add(5, 55));


/* LESSON 3 */
console.log(_.isString(true));
console.log(_.isString('abc'));

let filteredArray = _.uniq(['Jhon', 1, 'Jhon', 1, 2, 3, 4]);
console.log(filteredArray);