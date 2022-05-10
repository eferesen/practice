def largestSum(array):
  maxSum = currentSum = array[0]

  for num in array[1:]:
    currentSum = max(currentSum + num, num)
    maxSum = max(currentSum, maxSum)

  return maxSum

print(largestSum([15, 2, 4, -1, -12]))