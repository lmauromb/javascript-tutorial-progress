/*
 *
 * Look at the code. What will be result of the call at the last line?
 *
 */

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

// Error. The fucntion sayHi only exists inside the if Lexical Environment.
sayHi();
