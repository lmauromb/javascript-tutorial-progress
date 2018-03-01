"use strict";

function Calculator() {
  this.read = function() {
    this.x = +prompt("X:", 0);
    this.y = +prompt("Y:", 0);
  };

  this.sum = () => this.x + this.y;
  this.mul = () => this.x * this.y;
}

let calculator = new Calculator();
calculator.read();
alert( "Sum= " + calculator.sum());
alert( "Mul= " + calculator.mul());
