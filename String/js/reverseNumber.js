const reversedNumber = (x) => {
  // Begin with a var reversed set to 0

  let num = x;

  let coefficient = x < 0 ? -1 : 1;

  if (coefficient < 0) {
    num = Math.abs(x);
  }

  let reversed = 0;

  while (num > 0) {
    // Get last Digit of the number
    reversed = reversed * 10 + (num % 10);
    // Remove the last digit by dividing by 10
    num = Math.floor(num / 10);
  }

  if (coefficient < 0) {
    return reversed * coefficient;
  }
  return reversed;
};

console.log(reversedNumber(-123));
