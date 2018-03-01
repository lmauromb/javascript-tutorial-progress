/*
 *
 * European countries have days of week starting with monday (number 1),
 * then tuesday (number 2) and till sunday (number 7).
 * Write a function getLocalDay(date) that returns the “european” day of week for date.
 * 
 */

function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

let date = new Date(2012, 0, 3);    // 3 Jan 2012
console.log( getLocalDay(date) );   // tuesday, should show 2