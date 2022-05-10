const maxSumSubarray = (arr, k) => {
  let maxSum = -Infinity;
  let currentRunningTotal = 0;
  const tab = '     ';
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index i ${i}`);
    currentRunningTotal += arr[i];

    // check index k contraint
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currentRunningTotal);
      console.log(`${tab} Current Running total ${currentRunningTotal}`);
      // Remove the first elment for sliding scale
      console.log(`${tab} MaxSum ${maxSum}`);
      console.log(`${tab} Current index value ${arr[i]}`);
      console.log(`${tab} Kth index ${k - 1}`);
      console.log(`${tab} Kth value ${arr[k - 1]}`);
      console.log(`${tab} Current Sub ${arr[i - (k - 1)]}`);
      currentRunningTotal -= arr[i - (k - 1)];
      console.log(`${tab} Current Running total ${currentRunningTotal}`);
    }
  }

  return maxSum;
};

const array = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const result = maxSumSubarray(array, 3);

console.log(result);
