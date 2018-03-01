/*
 *
 * Write a function `filterRange(arr, a, b)` that gets an array `arr`,
 * looks for elements between `a` and `b` in it and returns
 * an array of them.
 * The function should not modify the array. It should return a new array.
 * 
 */

function filterRange(arr, a, b) {
  return arr.filter(number => number >= a && number <= b);
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];

    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

let array = [5, 3, 8, 1];
let filtered = filterRange(array, 1, 4);

console.log(filtered);
console.log(array);

filterRangeInPlace(array, 1, 4);

console.log(array);