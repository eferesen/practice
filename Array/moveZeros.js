const arr = [0, 0, 0, 0, 1];

const moveZeroes = (nums) => {
  let anchor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[anchor], nums[i]] = [nums[i], nums[anchor]];
      anchor++;
    }
  }

  return nums;
};
console.log(moveZeroes(arr));
