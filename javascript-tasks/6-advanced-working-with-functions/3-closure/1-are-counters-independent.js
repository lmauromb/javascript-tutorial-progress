/*
 *
 * Here we make two counters: counter and counter2 
 * using the same makeCounter function.
 * 
 * Are they independent? 
 * What is the second counter going to show? 
 * 0,1 or 2,3 or something else?
 * 
 */

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

// Each `function` has its own Lexical Environment.
// So, every counter has its own `count` variable.
console.log( counter2() ); // ? // 0
console.log( counter2() ); // ? // 1
