/*
 *
 * Here’s the function that uses nested setTimeout to split a job into pieces.
 *
 * Rewrite it to setInterval
 * 
 */

// Original using setTimeout

// let i = 0;

// let start = Date.now();

// function count() {

//   if (i == 1000000000) {
//     alert("Done in " + (Date.now() - start) + 'ms');
//   } else {
//     setTimeout(count, 0);
//   }

//   // a piece of heavy job
//   for(let j = 0; j < 1000000; j++) {
//     i++;
//   }

// }

// count();

let i = 0;

let start = Date.now();

let timer = setInterval(count, 0);

function count() {

  for(let j = 0; j < 1000000; j++) {
    i++;
  }

  if (i == 1000000000) {
    console.log("Done in " + (Date.now() - start) + 'ms');
    clearInterval(timer);
  }

}

count();