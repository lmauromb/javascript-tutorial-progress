'use strict';

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  return x ** n;
}

// ====== Min =====

let a = prompt("Give me a: ", "");
let b = prompt("Give me b: ", "");

alert(`Min of ${a} and ${b} is ${min(+a, +b)}`);

// ======= Pow ======

let x = prompt("Give me x: ", "");
let n = prompt("Give me n: ", "");

alert(`${x} in power ${n} is ${pow(+x, +n)}`);
