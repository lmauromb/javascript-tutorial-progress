function getMaxSubSum(inputArray) {
  let maxSum = 0;
  let partialSum = 0;

  for (let value of inputArray) {
    partialSum += value;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
