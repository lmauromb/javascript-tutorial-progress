/*
 *
 * Write a function getLastDayOfMonth(year, month) 
 * that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
 *
 * Parameters:
 *  year – four-digits year, for instance 2012.
 *  month – month, from 0 to 11.
 * 
 */

function getLastDayOfMonth(year, month) {
  let nextMonth = new Date(year, month + 1, 0);
  return nextMonth.getDate();
 }

 console.log( getLastDayOfMonth(2012, 1) ); // 29 leap year
