/*
 *
 * Modify the code of makeCounter() so that the counter
 * can also decrease and set the number:
 *
 *   counter() should return the next number (as before).
 *   counter.set(value) should set the count to value.
 *   counter.decrease(value) should decrease the count by 1.
 *
 * P.S. You can use either a closure or the function property
 * to keep the current count. Or write both variants.
 *
 */

function makeCounterUsingProperty() {

  function counter() {
    return counter.count++;
  };

  counter.set = function(value) {
    return counter.count = value;
  };

  counter.decrease = function() {
    return counter.count--;
  };

  counter.count = 0;
  return counter;
}

function makeCounterUsingClosure() {
  let count = 0;

  let counter = function() {
    return count++;
  }

  counter.set = function(value) {
    return count = value;
  }

  counter.decrease = function() {
    return count--;
  }

  return counter;
}

// let counter = makeCounterUsingProperty();
let counter = makeCounterUsingClosure();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter.set(10) ) // 10
console.log( counter.decrease() ) // 10
console.log( counter.decrease() ) // 9
