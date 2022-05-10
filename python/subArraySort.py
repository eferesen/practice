def subarraySort(array):
    # Write your code here.
    minOutOfOrder = float('inf')
    maxOutOfOrder = float('-inf')

    for i in range(len(array)):
        # find minOutOfOrder and maxOutOfOrder
        currentNum = array[i]

        if outOfOrder(i, currentNum, array):
            minOutOfOrder = min(minOutOfOrder, currentNum)
            maxOutOfOrder = max(maxOutOfOrder, currentNum)

    if minOutOfOrder == float('inf'):
        return [-1, 1]

    leftIdx = 0
    while minOutOfOrder >= array[leftIdx]:
        leftIdx += 1

    rightIdx = len(array) - 1
    while maxOutOfOrder <= array[rightIdx]:
        rightIdx -= 1

    return [leftIdx, rightIdx]


def outOfOrder(i, currentNum, array):
    # There is no number to the left
    if i == 0:
        return currentNum > array[i + 1]

    # Last Number
    if i == len(array) - 1:
        return currentNum < array[i - 1]

    return currentNum > array[i + 1] or currentNum < array[i - 1]


array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

print(subarraySort(array))
