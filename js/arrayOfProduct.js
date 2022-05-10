function arrayOfProducts(array) {
  // Write your code here.
  let finalArray = [];

  for (let i = 0; i <= array.length - 1; i++) {
    let runningSum = 1;
    for (let j = 0; j <= array.length - 1; j++) {
      if (i !== j) {
        runningSum = runningSum * array[j];
      }
    }
    finalArray.push(runningSum);
  }
  console.log(finalArray);
  return finalArray;
}

arrayOfProducts([5, 1, 4, 2]);
