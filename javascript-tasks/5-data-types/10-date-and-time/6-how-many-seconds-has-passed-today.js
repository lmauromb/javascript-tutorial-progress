/*
 *
 * Write a function `getSecondsToday()` that returns from the
 * beginning of today.
 * 
 */

function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log( getSecondsToday() );