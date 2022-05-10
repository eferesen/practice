const isPalindrome = (nums) => {
  
  if (nums < 0) {
    return false;
  }
  let reversed = reversedNumber(nums)
  
  return nums === reversed;
};

const reversedNumber = (x) => {
  let reversed = 0;
  while (x > 0) {
    reversed = (reversed * 10) + (x % 10)
    x = Math.floor(x / 10)
  }
  return reversed
};

const nums = 1001;

console.log(isPalindrome(nums));
