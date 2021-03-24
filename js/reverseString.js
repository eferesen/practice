function isPalindrome(string) {
  let reverse = '';
  for (let i = string.length; i >= 0; i--) {
    reverse = reverse + string.charAt(i);
  }
  if (reverse === string) {
    return true;
  }
  return false;
}

function example1(str) {
  leftIdx = 0;
  rightIdx = str.length - 1;
  console.log(str);
  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

console.log(example1('civic'));
