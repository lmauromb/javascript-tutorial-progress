/*
 *
 * Here a counter object is made with the help of the constructor function.
 * Will it work? What will it show?
 *
 */

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

// YES. The two inner functions are created in the same Lexical Environment,
// they can share the same outer variables

console.log( counter.up() ); // ? // 1
console.log( counter.up() ); // ? // 2
console.log( counter.down() ); // ? // 1
