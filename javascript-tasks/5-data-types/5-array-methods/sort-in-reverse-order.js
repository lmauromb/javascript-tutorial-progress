let arr = [5, 2, 1, -10, 8];

console.log( arr );

arr.sort((previousNumber, currentNumber) => currentNumber > previousNumber, 0);

console.log( arr );