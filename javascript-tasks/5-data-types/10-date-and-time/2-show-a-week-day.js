/*
 *
 * Write a function getWeekDay(date)
 * to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
 * 
 */

function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012

console.log( getWeekDay(date) );  // should output "TU"