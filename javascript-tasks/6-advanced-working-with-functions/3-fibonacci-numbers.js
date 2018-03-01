/*
 *
 * Write a function fib(n) that returns the n-th Fibonacci number.
 * `Fn = Fn-1 + Fn-2`
 * 
 */

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function optimalFibonacci(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c; 
  }

  return b;
}

console.log( optimalFibonacci(77) );