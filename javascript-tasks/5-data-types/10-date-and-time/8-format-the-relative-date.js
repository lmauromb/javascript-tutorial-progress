/*
 *
 * Write a function formatDate(date) that should format date as follows:
 * If since date passed less than 1 second, then "right now".
 * Otherwise, if since date passed less than 1 minute, then "n sec. ago".
 * Otherwise, if less than an hour, then "m min. ago".
 * Otherwise, the full date in the format "DD.MM.YY HH:mm".
 * That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16
 *
 */

function formatDate(date) {
  let diff = new Date() - date; // milliseconds

  if (diff < 1000) {
    return "right now";
  }

  let sec = Math.floor(diff / 1000) // seconds

  if (sec < 60) {
    return `${sec} sec. ago`;
  }

  let min = Math.floor(sec / 60);

  if (min < 60) {
    return `${min} min. ago`;
  }

  let hours = Math.floor(min / 24);

  if (hours < 24) {
    return `${hours} hours ago`;
  }

  // "day.month.year hours:minutes", all in 2-digit format
  let d = [
    `0${date.getDate()}`,
    `0${date.getMonth() + 1}`,
    `${date.getFullYear()}`,
    `0${date.getHours()}`,
    `0${date.getMinutes()}`
  ].map(component => component.slice(-2)); // take the last 2 digits

  return `${d.slice(0, 3).join('.')} ${d.slice(3).join(':')}`
}

console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );