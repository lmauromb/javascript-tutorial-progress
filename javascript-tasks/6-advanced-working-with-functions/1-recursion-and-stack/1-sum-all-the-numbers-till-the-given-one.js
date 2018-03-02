/*
 *
 * Write a function sumTo(n) that calculates the sum of numbers `1 + 2 + ... + n`.
 *
 * Make 3 solution variants:
 *
 *  1. Using a for loop.
 *  2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
 *  3. Using the arithmetic progression formula.
 *
 */

function iterativeSumTo(n) {
  let sum = 0;  
  
  for(i = 1; i <= n; i++) {
    sum += i;
  }
  
  return sum;
}


function sumTo(n) {
  if (n < 0) {
    return 0;
  } else {
    return n + sumTo(n - 1);
  }
}

function arithmeticProgression(n) {
  return n * (1 + n) / 2;
}

 console.log( arithmeticProgression(100000) );