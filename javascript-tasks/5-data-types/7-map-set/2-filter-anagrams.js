/* 
 * 
 * Anagrams are words that have the same number 
 * of same letters, but in different order.
 * 
 * Write a function aclean(arr) that 
 * returns an array cleaned from anagrams.
 * 
 */

function aclean(arr) {
  let anagrams = new Map();
  
  arr.forEach(element => {
    let key = element.toLowerCase().split('').sort().join('');
    
    if (anagrams.has(key)) return;

    anagrams.set(key, element);
  });

  return Array.from(anagrams.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"