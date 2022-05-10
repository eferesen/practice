const doubleExist = (nums) => {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    let target = nums[i] * 2;
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[j] == target) {
        return true;
      }
    }
  }
  return false;
};

const nums = [3, 1, 7, 11];

console.log(doubleExist(nums));
