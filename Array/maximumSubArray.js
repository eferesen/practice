const maxSubArray = (nums) => {
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    largest = Math.max(largest, nums[i]);
  }

  return largest;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
