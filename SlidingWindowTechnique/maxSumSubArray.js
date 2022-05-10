/*
  https://www.youtube.com/watch?v=MK-NZ4hN7rs
  Everythings is grouped sequentially
  Longest/Smallest/Contains
  Find the max sum subarray of a fixed size k
*/

const maxSumSubArray = (arr, k) => {
  // assert(k > 0, 'Sub Array must be postive');
  // Define current running sum and max Value

  let maxValue = -Infinity;
  let currentRunningTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    currentRunningTotal += arr[i];
    if (i >= k - 1) {
      maxValue = Math.max(maxValue, currentRunningTotal);
      // Slide array window
      // We have reached the max sub array size
      currentRunningTotal = arr[i - (k - 1)];
    }
  }
  return maxValue;
};

const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];

console.log(maxSumSubArray(arr, 3));
