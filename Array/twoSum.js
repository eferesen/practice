const numSample = [2, 7, 11, 15];
const target = 9;

const twoSums = (nums, target) => {
  // Create a hashmap with array element as key and index as value
  const seen = {};

  for (let i in nums) {
    let current = nums[i];
    let remain = target - current;
    if (remain in seen) {
      return [parseInt(i), parseInt(seen[remain])]
    }
    seen[current] = i
  }
};

// console.log(twoSum(numSample, target));
console.log(twoSums(numSample, target));
