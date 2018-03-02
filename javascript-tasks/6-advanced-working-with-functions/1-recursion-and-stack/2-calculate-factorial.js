/*
 *
 * Write a function factorial(n) that calculates n! using recursive calls.
 * `n! = n * (n - 1) * (n - 2) * ...*1`
 * 
 */

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function optimalFactorial(n) {
  let a = 1;

  for (let i = 2; i <= n; i++) {
    a = a * i;
  }

  return a;
}

console.log( `recursion ${factorial(5)}` );
console.log( `dynamic ${optimalFactorial(5)}` );