const nums = [0, 4, 5, 0, 3, 6];

const removeDuplicates = (nums) => {
  const seen = {};

  for (let num of nums) {
    if (!seen[num]) {
      seen[num] = true;
    } else {
      return true;
    }
  }
  return false;
};

console.log(removeDuplicates(nums));
