const smallestSubArraySize = (arr, targetSum) => {
  let smallestSize = Infinity;
  let currentSum = 0;
  let startIndex = 0;
  const tab = `     `;
  for (let endIndex = 0; endIndex < arr.length; endIndex++) {
    currentSum += arr[endIndex];

    console.log(`Current sum ${currentSum}`);

    while (currentSum >= targetSum) {
      // set the values for smallestSize
      smallestSize = Math.min(smallestSize, endIndex - startIndex + 1);
      // Decrease the current Sum -- shrink the window from left
      currentSum -= arr[startIndex];
      // Increment start index
      startIndex++;
    }
  }
  return smallestSize;
};

const value = smallestSubArraySize([4, 2, 2, 7, 8, 1, 2, 8, 1, 0], 8);
console.log(value);
