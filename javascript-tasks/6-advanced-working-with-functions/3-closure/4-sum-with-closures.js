/*
 *
 * Write function sum that works like this: sum(a)(b) = a + b.
 * Yes, exactly this way, via double brackets (not a mistype).
 *
 */

function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1) ); // 4
