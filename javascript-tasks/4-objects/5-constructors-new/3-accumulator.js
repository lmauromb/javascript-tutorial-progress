"use strict";

function Accumulator(startingValue = 0) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("Number to add:", 0);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
