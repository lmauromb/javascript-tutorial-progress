"use strict";

function Calculator() {
  let methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

result = powerCalc.calculate("2 - 3");
alert( result ); // -1

result = powerCalc.calculate("2 + 3");
alert( result ); // 5

result = powerCalc.calculate("2 * 3");
alert( result ); // 6

result = powerCalc.calculate("2 / 3");
alert( result ); // 0.6
