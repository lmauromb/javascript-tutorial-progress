/*
 *
 * Write a function printNumbers(from, to) that outputs a number every second,
 * starting from from and ending with to.
 *
 * Make two variants of the solution.
 *     Using setInterval.
 *     Using recursive setTimeout.
 * 
 */
     
function printNumbersUsingInterval(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

function printNumbersUsingTimeout(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbersUsingInterval(1, 5);
printNumbersUsingTimeout(5, 9);

