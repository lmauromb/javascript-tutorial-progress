/*
 *
 * Write a function `countProperties(obj)` that
 * returns the number of properties in the object
 * 
 * Try to make the code as short as possible
 * 
 * PS. ignore Symbol properties, count only 'regular' ones.
 * 
 */

 function countProperties(obj) {
   return Object.keys(obj).length;
 }

let user = {
  name: 'John',
  age: 30
};

console.log( countProperties(user) ); // 2
