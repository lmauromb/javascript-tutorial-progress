/*
 *
 * We want to get an array of map.keys() and go on working with it (apart from the map itself).
 * But there’s a problem: `Error: numbers.push is not a function`
 * Why? How can we fix the code to make keys.push work?
 * 
 */

let map = new Map();

map.set("name", "John");

let keys = Array.from( map.keys() ); // Solution use Array.from

// Error: numbers.push is not a function
keys.push("more");

console.log(keys);