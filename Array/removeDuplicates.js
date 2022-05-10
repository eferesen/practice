// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums = [1, 1, 2];

const removeDuplicates = (nums) => {

  if (nums.length === 0) {
    return 0;
  }

  let leftPointer = 1;

  for (let rightPointer = 1; rightPointer < nums.length; rightPointer++) {
    if (nums[rightPointer] !== nums[rightPointer - 1]) {
      nums[leftPointer] = nums[rightPointer];
      leftPointer++;
    }
  }
  console.log(nums)
  return leftPointer;
};

console.log(removeDuplicates(nums));



// let left = 0
    
//     for (let right = 1; right < nums.length; right++){
//         if (nums[left] !== nums[right]){
//             left++
//             nums[left] = nums[right]
            
//         }
//     }
    
//     return left + 1