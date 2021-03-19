data = [ 2, 5, 6, 8, 9, 10, 14, 18, 22, 43, 51]
target = 22


def recusiveBinarySearch(data, min, max, target):
  # base case meaning we did not find anything
  if min > max:
    return False
  else:
    midpoint = (min + max) // 2
    if target == data[midpoint]:
      return True
    elif target < data[midpoint]:
      return recusiveBinarySearch(data, min, midpoint -1, target)
    else:
      return recusiveBinarySearch(data, midpoint + 1, max,target)


print(recusiveBinarySearch(data, 0, len(data) - 1, 143))
