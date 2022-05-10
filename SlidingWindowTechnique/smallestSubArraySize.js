/*
  https://www.youtube.com/watch?v=MK-NZ4hN7rs
  Everythings is grouped sequentially
  Longest/Smallest/Contains
  Find the smallest subarray size
*/

const smallestSubArraySize = (arr, sum) => {
  let currentRunningTotal = 0;
  let maxArrSize = Infinity;

  // Dynamic Window
  let startWindowInd = 0;

  for (let i = 0; i < arr.length; i++) {
    currentRunningTotal += arr[i];

    while (currentRunningTotal >= sum) {
      maxArrSize = Math.min(maxArrSize, i - startWindowInd + 1);
      currentRunningTotal -= arr[startWindowInd];
      startWindowInd++;
    }
  }
  return maxArrSize;
};

const arr = [4, 2, 2, 7, 8, 1, 2, 8, 1, 0];

console.log(smallestSubArraySize(arr, 8));
