data = [ 2, 5, 6, 8, 9, 10, 14, 18, 22, 43, 51]
target = 22



def binarySearch(data, target):
  # mix and max index
  min = 0
  max = len(data) - 1

  while min <= max:
    midPoint = (min + max) // 2
    if target == data[midPoint]:
      return True
    elif target < data[midPoint]:
      # remove the right side of the list from midpoint
      max = midPoint - 1
    else:
      # remove the left side of the list from midpoint
      min = midPoint + 1

  return False

print(binarySearch(data, 118))