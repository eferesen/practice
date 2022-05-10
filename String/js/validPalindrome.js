const isPalindrome = (s) => {
  const sanitized = s.replace(/[^a-z0-9]/gi, '');

  let leftInd = 0;
  let rightInd = sanitized.length - 1;

  while (leftInd < rightInd) {
    if (sanitized[leftInd].toLowerCase() !== sanitized[rightInd].toLowerCase())
      return false;
    leftInd++;
    rightInd--;
  }
  return true;
};

const s = 'A man, a plan, a canal: Panama';
// const s = 'race a car';
// const s = ' ';
// const s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s));
