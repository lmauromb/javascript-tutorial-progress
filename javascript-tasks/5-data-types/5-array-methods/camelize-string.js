/*
 * Write a function camelize(str) that changes dash-separated words
 * like "my-short-string" into camel-cased "myShortString"
 * 
 */

 function camelize(str) {
  let stringArray = str.split('-').filter(word => word.length > 0);
  
  return stringArray.map((word, index) => {
    return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
  }).join('');
 }

 console.log( camelize("background-color") );
 console.log( camelize("list-style-image") );
 console.log( camelize("-webkit-transition") );