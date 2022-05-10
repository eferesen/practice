const removeDupeSortedArray = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  // The first element will count so set the leftIndex to one
  let leftIndex = 1;

  for (let rightIndex = 1; rightIndex < nums.length; rightIndex++) {
    if (nums[rightIndex] !== nums[rightIndex - 1]) {
      // This is critical step.  Update the nums array with the value
      // right index
      nums[leftIndex] = nums[rightIndex];
      // We know that rightIndex and rightIndex - 1 are not equal
      // So increase leftIndex by 1
      leftIndex++;
    }
  }
  console.log(nums);
  return leftIndex;
};

console.log(removeDupeSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// So the nums array looks like
// [0, 1, 2, 3, 4, 2, 2, 3, 3, 4];
// Run the debugger
