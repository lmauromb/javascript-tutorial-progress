/*
 *
 * Turn the user into JSON and then read it back into another variable.
 * 
 */

let user = {
  name: "John Smith",
  age: 35
};

let userJSON = JSON.stringify(user, null, 2);

let userFromJSON = JSON.parse(userJSON);

console.log(userJSON);
console.log(userFromJSON);